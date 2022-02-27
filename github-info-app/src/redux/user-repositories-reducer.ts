import {getRepos} from "../api/github-api";

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

const userRepositoriesReducer = (state: object = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_REPOS:
      return {...state, userRepos: action.repos}
    case TOGGLE_IS_FETCHING_REPOS:
      return {...state, isFetchingRepos: action.isFetching}

    default:
      return state
  }
}

export default userRepositoriesReducer


export const setUserRepos = (repos: object) => ({type: SET_USER_REPOS, repos})
export const toggleIsFetchingRepos = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING_REPOS, isFetching})



export const getUserRepos = (userName: string) => {
  return (dispatch: any) => {
      dispatch (toggleIsFetchingRepos(true))

      getRepos(userName).then(data => {
        console.log(data)
        //dispatch(setUserRepos(data))
        dispatch (toggleIsFetchingRepos(false))
      })
  }
}