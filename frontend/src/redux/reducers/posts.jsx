import { getPosts, getType } from "../actions";
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
        default:
            return state
    }
}