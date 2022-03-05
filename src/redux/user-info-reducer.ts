import {getUserData} from "../api/github-api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING_DATA = 'TOGGLE_IS_FETCHING_DATA'
const TOGGLE_ERROR = 'TOGGLE_ERROR'
const SET_USER_ORGS = 'SET_USER_ORGS'
const SET_USER_NAME = 'SET_USER_NAME'

const SET_CHAPTER = 'SET_CHAPTER'

interface State {
  userData: object
  isFetchingData: boolean
  errorCode: number
  orgsData: object
  isError: boolean
  userName: string
}

const initialState: State = {
  userData: {},
  isFetchingData: false,
  errorCode: 0,
  orgsData: [],
  isError: false,
  userName: ''
  }


const userInfoReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, userData: action.userData}
    case TOGGLE_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.isFetching}
    case TOGGLE_ERROR:
      return {...state, isError : action.isError}
    case SET_USER_ORGS:
      return {...state, orgsData: action.orgs }
    case SET_USER_NAME:
          return {...state, userName: action.name}
    case SET_CHAPTER:
          return {...state, chapter: action.chapter}
    default:
      return state
  }
}

export default userInfoReducer

export const setUserData = (userData: object): object => ({type: SET_USER_DATA, userData})


export const setUserOrgs = (orgs: object): object => ({type: SET_USER_ORGS, orgs})

export const setChapter = (chapter: string) => ({type: SET_CHAPTER, chapter})
export const setUserName = (name: string) => ({type: SET_USER_NAME, name})



export const toggleIsFetchingData = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_DATA, isFetching})
export const toggleError = (isError: boolean) => ({type: TOGGLE_ERROR, isError})


export const getData = (userName: string) => async (dispatch: any) => {
    dispatch (toggleIsFetchingData(true))
    try {
      const response: any = await getUserData(userName)
      
        if (response.user.login) {

          dispatch(toggleError(false))

          const user: any = response.user
          const orgs: object = response.orgs

          dispatch(setUserData(user))

          dispatch(setUserOrgs(orgs))

          


          dispatch (toggleIsFetchingData(false))
        }

    } catch (error: any) {
      dispatch(toggleError(true))
    }

  }
