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
                  debugger
                  return {
                        ...state,
                        inputText: action.inputText
                  }

            default:
                  return state
      }
}

export default headerReducer

export const searchUser = (userName: string) => ({type: SEARCH_USER, userName})
export const updateInputText = (inputText: string) => ({type: UPDATE_INPUT_TEXT, inputText})