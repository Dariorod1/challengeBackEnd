import { Router } from 'express';
const router = Router();

import { getCategories, createCategories, getOneCategory } from '../controllers/categories.controllers';

router.post('/', createCategories)
router.get('/', getCategories);
router.get('/:id', getOneCategory)


export default router;