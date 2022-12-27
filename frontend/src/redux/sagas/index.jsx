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
      yield put(actions.createPost.createPostSuccess(post.data))
    } catch (error) {
      console.log(error)
      yield put(actions.createPost.createPostFailure(error))
    }
}

function* updatePostSaga(action) {
  try {
    const updatePost = yield call(api.updatePost, action.payload)
    console.log('[Update post] ==== ', updatePost)
    yield put(actions.updatePost.updatePostSuccess(updatePost.data))
  } catch (error) {
    console.log(error)
    yield put(actions.updatePost.updatePostFailure(error))
  }
}

function* deletePostSaga(action) {
  try {
    const deletePost = yield call(api.deletePost, action.payload)
    console.log('[delete post] ==== ', deletePost)
    yield put(actions.deletePost.deletePostSuccess(deletePost))
  } catch (error) {
    console.log(error)
    yield put(actions.deletePost.deletePostFailure(error))
  }
}


function* rootSaga() {    
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga)
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga)
}

// generator function ES6

export default rootSaga