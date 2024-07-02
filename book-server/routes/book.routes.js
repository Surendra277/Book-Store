import express from 'express'
import bookController from '../controller/book.controller.js';
import favbooksController from '../controller/favbook.controller.js';
import authenticateToken from '../auth/userAuth.js';



const router =express.Router()

router.get('/getbook',bookController.getBook)
router.post('/book',authenticateToken,bookController.storeBook)
router.put('/updatebook',authenticateToken,bookController.updateBook)
router.delete('/book',authenticateToken,bookController.deleteBook)
router.get('/bookbyid/:id',bookController.getBookyById);
// router.post('/bestbook',favbooksController.storeFavBooks)
// router.get('/bestbook',favbooksController.getFavBooks)


export default router;