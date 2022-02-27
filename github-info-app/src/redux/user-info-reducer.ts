import {getUserData} from "../api/github-api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA'

interface State {
  userData: object
  isFetchingData: boolean
}

const initialState: State = {
  userData: {},
  isFetchingData: false
}

const userInfoReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, userData: {...action.data}}
    case TOGGLE_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.isFetching}

    default:
      return state
  }
}

export default userInfoReducer

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

export const toggleIsFetchingData = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_DATA, isFetching})


export const getData = (userName: string) => {
  return (dispatch: any) => {
    dispatch (toggleIsFetchingData(true))



    getUserData(userName).then(data => {
      console.log(data)
      const user: any = data.user
      const orgs: any = data.orgs

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