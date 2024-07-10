import express from "express";
import bookController from "../controller/book.controller.js";
import favbooksController from "../controller/favbook.controller.js";
import authenticateToken from "../auth/userAuth.js";
import upload from "../middleware/uploads.js";

const router = express.Router();

router.get("/getbook",bookController.getBook);
router.post("/book", upload,bookController.storeBook);
router.put("/updatebook", authenticateToken, bookController.updateBook);
router.delete("/book", authenticateToken, bookController.deleteBook);
router.get("/bookbyid/:id", bookController.getBookyById);
router.put("/storefavbooks", authenticateToken, favbooksController.storeFavBooks);
router.put("/removefavbooks", authenticateToken, favbooksController.removeFavBooks);
// router.get("/getfavbooks", authenticateToken, favbooksController.getFavBooks);
// router.post('/bestbook',favbooksController.storeFavBooks)
// router.get('/bestbook',favbooksController.getFavBooks)

export default router;
