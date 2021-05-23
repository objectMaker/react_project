import countReducer from './count_reducer'
import asyncGitReducer from './async_git_reducer'
import {combineReducers} from 'redux'
export default combineReducers({count:countReducer,gitData:asyncGitReducer});