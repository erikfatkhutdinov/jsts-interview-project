import {getData} from "./user-info-reducer";
import {getUserRepos} from "./user-repositories-reducer"



const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT'
const SET_USER_NAME = 'SET_USER_NAME'

interface State {
      inputText: string,
      userName: string
}

const initialState: State = {
      inputText: '',
      userName: 'fatkh0'
}

const headerReducer = (state: object = initialState, action: any) => {
      switch (action.type) {
            case UPDATE_INPUT_TEXT:
                  return {...state, inputText: action.inputText}
            case SET_USER_NAME:
                  return {...state, userName: action.name}

            default:
                  return state
      }
}

export default headerReducer

export const updateInputText = (inputText: string) => ({type: UPDATE_INPUT_TEXT, inputText})
export const setUserName = (name: string) => ({type: SET_USER_NAME, name})



export const searchUser = (userName: string) => {
      return (dispatch: any) => {
            dispatch(setUserName(userName))
            dispatch(getData(userName))
            dispatch(getUserRepos(userName))
            dispatch(updateInputText(''))
      }

}