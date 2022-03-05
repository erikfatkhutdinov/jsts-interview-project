import {getData} from "./user-info-reducer";
import {getUserRepos} from "./user-repositories-reducer"
import { setUserName } from "./user-info-reducer";

const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT'
interface State {
      inputText: string,
      chapter: string
}

const initialState: State = {
      inputText: '',
      chapter: ''
}

const headerReducer = (state: object = initialState, action: any) => {
      switch (action.type) {
            case UPDATE_INPUT_TEXT:
                  return {...state, inputText: action.inputText}
            default:
                  return state
      }
}
export default headerReducer

export const updateInputText = (inputText: string) => ({type: UPDATE_INPUT_TEXT, inputText})

export const searchUser = (userName: string) => {
      return (dispatch: any) => {
            dispatch(setUserName(userName))
            dispatch(getData(userName))
            dispatch(getUserRepos(userName))
            dispatch(updateInputText(''))
      }

}