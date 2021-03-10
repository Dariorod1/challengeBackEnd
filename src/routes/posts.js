import { Router } from 'express';
const router = Router();

import { createPost, updatePost, getPosts, deletePosts, getOnePost } from '../controllers/posts.controllers';

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getOnePost)
router.put('/:id', updatePost);
router.delete('/:id', deletePosts)

export default router;