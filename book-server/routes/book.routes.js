import express from 'express'
import bookController from '../controller/book.controller.js';


const router =express.Router()

router.get('/book',bookController.getBook)
router.post('/book',bookController.storeBook)
export default router;