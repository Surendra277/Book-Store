import express from 'express'
import bookController from '../controller/book.controller.js';
import favbooksController from '../controller/favbook.controller.js';



const router =express.Router()

router.get('/book',bookController.getBook)
router.post('/book',bookController.storeBook)
router.put('/book/:id',bookController.updateBook)
router.delete('/book/:id',bookController.deleteBook)
router.post('/bestbook',favbooksController.storeFavBooks)
router.get('/bestbook',favbooksController.getFavBooks)

export default router;