import { combineReducers } from 'redux'
import posts from './posts'
import modalAddPost from './modalAddPost'

export default combineReducers({
    posts, 
    modalAddPost
})