import {getRepos, getUserData} from "../api/github-api";

const SEARCH_USER = 'SEARCH_USER'
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT'

interface State {
      inputText: string
      userName: string
}

const initialState: State = {
      inputText: '',
      userName: '',
}

const headerReducer = (state: object = initialState, action: any) => {
      switch (action.type) {
            case SEARCH_USER:
                  return {
                        ...state,
                        userName: action.userName
                  }
            case UPDATE_INPUT_TEXT:
                  return {
                        ...state,
                        inputText: action.inputText
                  }

            default:
                  return state
      }
}

export default headerReducer

export const setUserData = (data: string) => ({type: SEARCH_USER, data})
export const updateInputText = (inputText: string) => ({type: UPDATE_INPUT_TEXT, inputText})

export const searchUser = (userName: string) => {
      return (dispatch: any) => {
            getRepos(userName).then(data => {
                  console.log(data)
            })

            getUserData(userName).then(data => {
                  console.log(data)
            })
      }
}