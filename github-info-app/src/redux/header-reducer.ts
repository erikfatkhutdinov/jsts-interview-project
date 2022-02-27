import {getRepos, getUserData} from "../api/github-api";

const SEARCH_USER = 'SEARCH_USER'
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT'
const SET_USER_REPOS = 'SET_USER_REPOS'
const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING_REPOS = 'TOGGLE_IS_FETCHING_REPOS'
const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

interface State {
      inputText: string
      repos: object
      userData: object
      isFetchingRepos: boolean
      isFetchingData: boolean
}

const initialState: State = {
      inputText: '',
      repos: [],
      userData: {},
      isFetchingRepos: false,
      isFetchingData: false
}

const headerReducer = (state: object = initialState, action: any) => {
      //console.log(state)
      switch (action.type) {
            case SEARCH_USER:
                  return {...state, userName: action.userName}
            case UPDATE_INPUT_TEXT:
                  return {...state, inputText: action.inputText}
            case SET_USER_REPOS:
                  return {...state, userRepos: action.repos}
            case SET_USER_DATA:
                  return {...state, userData: {...action.data}}
            case TOGGLE_IS_FETCHING_REPOS:
                  return {...state, isFetchingRepos: action.isFetching}
            case TOGGLE_IS_FETCHING_DATA:
                  return {...state, isFetchingData: action.isFetching}

            default:
                  return state
      }
}

export default headerReducer

export const setUserData = (
  login: string,
  avatar_url: string,
  name: string,
  blog: string,
  company: string | null,
  location: string | null,
  email: string | null,
  bio: string | null,
  twitter_username: string | null,
  created_at: string
) => ({type: SET_USER_DATA,
      data: {
            login, avatar_url, name, blog, company, location, email, bio, twitter_username, created_at
      }
})
export const updateInputText = (inputText: string) => ({type: UPDATE_INPUT_TEXT, inputText})
export const setUserRepos = (repos: object) => ({type: SET_USER_REPOS, repos})
export const toggleIsFetchingRepos = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_REPOS, isFetching})
export const toggleIsFetchingData = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_DATA, isFetching})


export const searchUser = (userName: string) => {
      return (dispatch: any) => {
            dispatch (toggleIsFetchingData(true))
            dispatch (toggleIsFetchingRepos(true))

                  getRepos(userName).then(data => {
                        console.log(data)
                        dispatch(setUserRepos(data))
                        dispatch (toggleIsFetchingRepos(false))
                  })

                  getUserData(userName).then(data => {
                        console.log(data)
                        const user: any = data.user
                        //const orgs = data.orgs
                        dispatch(setUserData(
                          user.login,
                          user.avatar_url,
                          user.name,
                          user.blog,
                          user.company,
                          user.location,
                          user.email,
                          user.bio,
                          user.twitter_username,
                          user.created_at
                        ))

                        dispatch (toggleIsFetchingData(false))

                  })


      }
}