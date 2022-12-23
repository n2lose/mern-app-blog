import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container'
import BlogPosts from '../components/BlogPosts'
import Header from '../components/Header'
import AddNewButton from './AddNewButton';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CreatePostBlog from '../components/CreatePostBlog';
import { showModal } from '../redux/actions';

export default function HomePage() {
    const dispatch = useDispatch()    
    const openCreatePostModal = useCallback(()=> {
        dispatch(showModal())
    }, [dispatch])


    return (
        <Container maxWidth="lg">
           <Header />
           <BlogPosts />
           <CreatePostBlog />
           <AddNewButton onClick={openCreatePostModal}>
                <AddIcon />
           </AddNewButton>
        </Container>
    )
}