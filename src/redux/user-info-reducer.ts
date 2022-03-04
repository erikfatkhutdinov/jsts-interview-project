import {getUserData} from "../api/github-api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA'
const SET_ERROR_CODE = 'SET_ERROR_CODE'
const SET_USER_ORGS = 'SET_USER_ORGS'

interface State {
  userData: object
  isFetchingData: boolean
  errorCode: number
  orgsData: object
}

const initialState: State = {
  userData: {},
  isFetchingData: false,
  errorCode: 0,
  orgsData: []
  }


const userInfoReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, userData: {...action.data}}
    case TOGGLE_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.isFetching}
    case SET_ERROR_CODE:
      return {...state, errorCode : action.errorCode}
    case SET_USER_ORGS:
      return {...state, orgsData: action.orgs }

    default:
      return state
  }
}

export default userInfoReducer

export const setUserData = (
  login: string,
  avatar_url: string,
  name: string,
  created_at: string,
  blog: string,
  company: string | null,
  location: string | null,
  email: string | null,
  bio: string | null,
  twitter_username: string | null,
  html_url: string
): object => ({type: SET_USER_DATA,
  data: {
    login, avatar_url, name, created_at, blog, company, location, email, bio, twitter_username, html_url
  }
})


export const setUserOrgs = (orgs: object): object => ({type: SET_USER_ORGS, orgs})



export const toggleIsFetchingData = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_DATA, isFetching})
export const setErrorCode = (errorCode: number) => ({type: SET_ERROR_CODE, errorCode})


export const getData = (userName: string) => async (dispatch: any) => {
    dispatch (toggleIsFetchingData(true))
    try {
      const response: any = await getUserData(userName)

        if (response.user.login) {

          dispatch(setErrorCode(0))

          const user: any = response.user
          const orgs: object = response.orgs

          dispatch(setUserData(
            user.login,
            user.avatar_url,
            user.name,
            user.created_at,
            user.blog,
            user.company,
            user.location,
            user.email,
            user.bio,
            user.twitter_username,
            user.html_url
          ))

          dispatch(setUserOrgs(orgs))


          dispatch (toggleIsFetchingData(false))
        }

    } catch (error: any) {
      dispatch (setErrorCode(error.response.status))
    }

  }
