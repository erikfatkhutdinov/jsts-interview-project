import {applyMiddleware, combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer";
import userInfoReducer from "./user-info-reducer";
import userReposReducer from "./user-repositories-reducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  header: headerReducer,
  userInfo: userInfoReducer,
  userRepos: userReposReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store
