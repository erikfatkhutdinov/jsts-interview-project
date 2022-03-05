import {getRepos} from "../api/github-api";

const SET_USER_REPOS = 'SET_USER_REPOS'
const TOGGLE_IS_FETCHING_REPOS = 'TOGGLE_IS_FETCHING_REPOS'
const TOGGLE_ERROR = 'TOGGLE_ERROR'

interface State {
  repos: object
  isFetchingRepos: boolean
  isError: boolean
}

const initialState: State = {
  repos: [],
  isFetchingRepos: false,
  isError: false
}

const userReposReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_REPOS:
      return {...state, repos: action.repos}
    case TOGGLE_IS_FETCHING_REPOS:
      return {...state, isFetchingRepos: action.isFetching}
    case TOGGLE_ERROR:
      return {...state, isError : action.isError}
    default:
      return state
  }
}
export default userReposReducer

export const setUserRepos = (repos: object) => ({type: SET_USER_REPOS, repos})
export const toggleIsFetchingRepos = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_REPOS, isFetching})
const toggleError = (isError: boolean) => ({type: TOGGLE_ERROR, isError})

export const getUserRepos = (userName: string) => async (dispatch: any) => {
  dispatch (toggleIsFetchingRepos(true))
  try {
    const response: any = await getRepos(userName)
    dispatch(toggleError(false))
    dispatch(setUserRepos(response))
    dispatch (toggleIsFetchingRepos(false))
  } catch (error: any) {
    dispatch (toggleError(true))
  }
}
