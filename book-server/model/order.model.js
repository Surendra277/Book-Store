import mongoose from "mongoose";

const orderSchema =new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
    },
    status:{
        type:String,
        default:"Order placed",
        enum:["Order PLaced","Out for Delivery","delivered","Cancelled"],
    },
  
} , {timestamps:true})

const Order = mongoose.model("Order",orderSchema);
export default Order;


