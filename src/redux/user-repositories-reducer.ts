import {getRepos, getUserData} from "../api/github-api";
import {setErrorCode, setUserData, toggleIsFetchingData} from "./user-info-reducer";

const SET_USER_REPOS = 'SET_USER_REPOS'
const TOGGLE_IS_FETCHING_REPOS = 'TOGGLE_IS_FETCHING_REPOS'

interface State {
  repos: object
  isFetchingRepos: boolean
}

const initialState: State = {
  repos: [],
  isFetchingRepos: false
}

const userReposReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_REPOS:
      return {...state, userRepos: action.repos}
    case TOGGLE_IS_FETCHING_REPOS:
      return {...state, isFetchingRepos: action.isFetching}

    default:
      return state
  }
}

export default userReposReducer


export const setUserRepos = (repos: object) => ({type: SET_USER_REPOS, repos})
export const toggleIsFetchingRepos = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_REPOS, isFetching})



export const getUserRepos = (userName: string) => async (dispatch: any) => {
      dispatch (toggleIsFetchingRepos(true))

  try {
    const response = await getRepos(userName)

    if (response.length) {
      console.log(response)
      dispatch (toggleIsFetchingRepos(false))
    }

  } catch (error: any) {

  }
}
