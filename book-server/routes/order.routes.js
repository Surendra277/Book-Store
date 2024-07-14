import express from "express";
import authenticateToken from "../auth/userAuth.js";
import upload from "../middleware/uploads.js";
import orderController from "../controller/order.controller.js";



const orderRouter = express.Router();

orderRouter.post('/placeorder',authenticateToken,orderController.createOrder)
orderRouter.get('/getorder',authenticateToken,orderController.orderHistory)
orderRouter.post('/cancelorder/:orderId',authenticateToken,orderController.cancelOrder)

export default orderRouter;