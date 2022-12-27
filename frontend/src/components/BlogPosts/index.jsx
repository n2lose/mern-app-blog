import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { postsState$ } from "../../redux/selectors";

import Post from './Post'

export default function BlogPosts() {
  const dispatch = useDispatch()

  const posts = useSelector(postsState$)
  console.log('posts lists === ', posts)

  useEffect(()=> {
    console.log('dispatch action get all posts')
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch])

  return (
    <Grid container spacing={2} alignItems="stretch" >
      { posts && posts.map(post => (
        <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
          <Post data={post} />
        </Grid>
      ))}    
    </Grid>
  )
}