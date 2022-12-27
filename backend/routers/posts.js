import express from 'express';
import { createPost, getPosts, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost)
router.post('/update', updatePost)
router.post('/delete/:id', deletePost)

export default router;