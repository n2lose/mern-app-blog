import { createPost, deletePost, getPosts, getType, updatePost } from "../actions";
import { INIT_STATE } from "../constant";

export default function postsReducer(state = INIT_STATE.posts, action) {
    switch(action.type) {
        case getType(getPosts.getPostsRequest): // case 'getPostsRequest'    
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess): {
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case getType(getPosts.getPostsFailure) :
            return {
                ...state,
                isLoading: false
            }
        case getType(createPost.createPostSuccess): {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        case getType(updatePost.updatePostRequest): {
            console.log('likes count === ', action.payload)
            return {
                ...state,
                data: state.data.map(post => post._id === action.payload ? action.payload: post)
            }
        }
        case getType(deletePost.deletePostRequest): {
            const newPostsList = state.data
            const index = newPostsList.findIndex(post => post._id === action.payload)
            if(index > -1) newPostsList.splice(index, 1)            
            return {
                ...state,
                data: newPostsList
            }
        }
        
        default:
            return state
    }
}