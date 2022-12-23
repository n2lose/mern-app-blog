import { getType, hideModal, showModal } from "../actions";
import { INIT_STATE } from "../constant";


export default function modalAddPostReducer(state = INIT_STATE.modalAddPost, action) {    
    switch(action.type) {
        case getType(showModal): 
            return {
                isShow: true
            }
        case getType(hideModal):
            return {
                isShow: false
            }
        default: 
            return state
    }
}