import Order from "../model/order.model.js";
import User from "../model/user.model.js";


 const orderController={
     
  async createOrder(req, res) {

  try {
      const {id} = req.headers;
      const {order} = req.body;
      for(const orderData of order){
        const newOrder =new Order({user:id,book:orderData._id});
        const orderDataFromDb =await newOrder.save();

        await User.findByIdAndUpdate(id,{
          $push:{orders:orderDataFromDb._id},
        })
         
        await User.findByIdAndUpdate(id,{
          $pull:{cart:orderData._id}, 
        })
      }
  
    return res.json({
      status:"success",
      message:"Order Placed Successfully"
    })
  } catch (err) {
   return res.status(500).json({ message: err.message });
  }
},

async orderHistory (req,res){
  try {
    const {id} = req.headers;
    const userdata = await User.findById(id).populate({
      path:"orders",
      populate:{path:"book"}
    });
    
    const orderData =userdata.orders.reverse();
    return res.status(200).json({ orderData });
}
catch (err) {
   return res.status(500).json({ message: err.message });
}
},

async cancelOrder(req, res) {
  try {
    const { orderId } = req.params;
    const { id } = req.headers;


    const order = await Order.findById(orderId);
  
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.user.toString() !== id) {
      return res.status(403).json({ message: "Not authorized to cancel this order" });
    }

    await Order.findByIdAndDelete(orderId);

    await User.findByIdAndUpdate(id, {
      $pull: { orders: orderId },
    });

    return res.status(200).json({
      status: "success",
      message: "Order Cancelled Successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
},

async allOrders(req,res){
  try {
    const userData = await Order.find().populate({
      path:"book",
})
.populate({
  path:"user",
})
.sort({createdAt:-1})
return res.json({
  status:"Success",
  data:userData,
  })
}
catch(err){
  return res.status(500).json({message:err.message})
}
}
}
export default orderController;
