import { Modal, Typography,Box, Divider, Button, TextareaAutosize, TextField } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux"
import FileBase64 from 'react-file-base64';
import { createPost, hideModal } from '../../redux/actions'
import { modalAddPost$ } from "../../redux/selectors"
import { useState } from 'react';

export default function CreatePostBlog() {      
    const dispatch = useDispatch()
    const isShow = useSelector(modalAddPost$)    
    
    const [data, setData] = useState({
        title:"", 
        content: "",
        attachment: "",
        author: "",
        authorAvatar: ""
    })

    const handleOnClose = useCallback(()=> {
        dispatch(hideModal())
    }, [dispatch])

    const handleCreatePost = useCallback(()=> {
        console.log("data submit ==== ", data)
        dispatch(createPost.createPostRequest(data))
    }, [data, dispatch])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    return (
        <Modal open={isShow} onClose={handleOnClose}>
            <Box sx={style}>
                <Typography id="modal-title" variant="h4" component="h2" align='center'>
                    Add New Post
                </Typography>
                <Divider/>
                <form validate autoComplete='off' style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField 
                        label="Title" 
                        style={{marginBottom: '1rem'}} 
                        required
                        value={data.title}
                        onChange={e => setData({...data, title: e.target.value})}
                    />
                    <TextareaAutosize 
                        placeholder='Enter your content blog here...' 
                        minRows={10} 
                        maxRows={15} 
                        style={{marginBottom: '1rem'}} 
                        value={data.content}                            
                        onChange={e => setData({...data, content: e.target.value})}
                    />
                    <FileBase64 
                        accept="images/*" 
                        mutiple={false} 
                        type="file" 
                        value={data.attachment}
                        onDone={({base64}) => setData({...data, attachment: base64}) }
                    />
                    <TextField 
                        label="Author" 
                        style={{margin: '1rem 0'}}  
                        value={data.author}
                        onChange={e => setData({...data, author: e.target.value})}
                    />
                    <FileBase64
                        accept="images/*" 
                        mutiple={false} 
                        type="file"
                        value={data.authorAvatar}
                        onDone={({base64}) => setData({...data, authorAvatar: base64})}
                    />
                    <Button 
                        variant='container' 
                        color='main' 
                        component='span' 
                        fullWidth 
                        onClick={handleCreatePost}
                    >
                        Create
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}