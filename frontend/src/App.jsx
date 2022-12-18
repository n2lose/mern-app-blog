
import { useDispatch } from 'react-redux'
import * as actions from './redux/actions'

function App() {

  const dispatch = useDispatch()

  dispatch(actions.getPosts.getPostsRequest())

  return (
    <div className="App">
     <h1>Blog App</h1>
    </div>
  )
}

export default App
