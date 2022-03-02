import {getRepos} from "../api/github-api";

const SET_USER_REPOS = 'SET_USER_REPOS'
const TOGGLE_IS_FETCHING_REPOS = 'TOGGLE_IS_FETCHING_REPOS'

interface State {
  repos: object
  isFetchingRepos: boolean
}

const initialState: State = {
  repos: [
    {
    name: '' ,
    created_at: '',
    default_branch: '',
    html_url: '',
    language:  '',
    visibility: '',
    licence: '',
    update_at: '',
    description: ''
    }
  ],
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

  /*

  name: item.name,
      created_at: item.created_at,
      default_branch: item.default_branch,
      html_url: item.html_url,
      language: item.language,
      visibility: item.visibility

  */



export const getUserRepos = (userName: string) => async (dispatch: any) => {
  
      dispatch (toggleIsFetchingRepos(true))

  try {
    const response = await getRepos(userName)

    if (response.length) {
      

      //console.log(getOrgsInfo(response))

      dispatch(setUserRepos(response))

      dispatch (toggleIsFetchingRepos(false))
    }

  } catch (error: any) {

  }
}
