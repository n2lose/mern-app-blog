import { createActions } from 'redux-actions'

export const getType = (reduxAction) => {
    
    return reduxAction().type
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err
})

/*
* createActions will create action creators
* getPostsRequest function will return object:  {
    type: 'getPostsRequest'
}

* getPostsSuccess function will return object:  {
    type: 'getPostsSuccess',
    payload: payload
}

* getPostsFailure function will return object:  {
    type: 'getPostsFailure',
    payload: err
}
*/