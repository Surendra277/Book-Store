import Order from "../model/order.model";

 const orderController={
     async createOrder(req, res) {
        const { userId, bookId } = req.body;

  try {
    const newOrder = new Order({
      user: userId,
      book: bookId,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},
 async getOrders (req, res){
    try {
      const orders = await Order.find().populate('user').populate('book');
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
export default orderController;
