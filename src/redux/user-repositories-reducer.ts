import { ResolveArrayThunks } from "react-redux";
import {getRepos} from "../api/github-api";

const SET_USER_REPOS = 'SET_USER_REPOS'
const TOGGLE_IS_FETCHING_REPOS = 'TOGGLE_IS_FETCHING_REPOS'
const SET_ERROR_CODE = 'SET_ERROR_CODE'

interface State {
  repos: object
  isFetchingRepos: boolean
  errorCode: number
}

const initialState: State = {
  repos: [],
  isFetchingRepos: false,
  errorCode: 0
}

const userReposReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_REPOS:
      return {...state, repos: action.repos}
    case TOGGLE_IS_FETCHING_REPOS:
      return {...state, isFetchingRepos: action.isFetching}
    case SET_ERROR_CODE:
      return {...state, errorCode: action.code}

    default:
      return state
  }
}

export default userReposReducer


export const setUserRepos = (repos: object) => ({type: SET_USER_REPOS, repos})
export const toggleIsFetchingRepos = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_REPOS, isFetching})
export const setErrorCode = (code: number) => ({type: SET_ERROR_CODE, code})



export const getUserRepos = (userName: string) => async (dispatch: any) => {
  
      dispatch (toggleIsFetchingRepos(true))

  try {
    const response: any = await getRepos(userName)
    dispatch(setErrorCode(0))

    if (response.length) {
      dispatch(setUserRepos(response))
      dispatch (toggleIsFetchingRepos(false))
    }
  } catch (error: any) {
    dispatch (setErrorCode(error.response?.status))
  }
}
