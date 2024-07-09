import express from 'express'
import userController from '../controller/user.controller.js';
import authenticateToken from '../auth/userAuth.js';


const userRouter = express.Router();


userRouter.post('/signup',userController.signUp);
userRouter.post('/login',authenticateToken,userController.signIn);
userRouter.get('/getuser',authenticateToken,userController.getUser);
userRouter.put('/updateadd',authenticateToken,userController.updateAdd);
export default userRouter; 