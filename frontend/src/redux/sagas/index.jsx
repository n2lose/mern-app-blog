import { takeLatest , call, put} from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts)
    console.log('[posts] ==== ', posts)
    yield put(actions.getPosts.getPostsSuccess(posts.data))
  } catch (error) {
    console.log(error)
    yield put(actions.getPosts.getPostsFailure(error))
  }
}

function* createPostSaga(action) {
    try {
      const post = yield call(api.createPost, action.payload)
      console.log('[create post] ==== ', post)
      yield put(actions.createPost.createPostSuccess(post))
    } catch (error) {
      console.log(error)
      yield put(actions.createPost.createPostFailure(error))
    }
}

function* rootSaga() {    
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
}

// generator function ES6

export default rootSaga