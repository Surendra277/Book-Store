import User from "../model/user.model.js";

const cartController ={
   async addToCart(req,res){
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookinCart = userData.cart.includes(bookid);
        if (isBookinCart) {
          return res
            .status(400)
            .json({ message: "Book is already in your Cart" });
        }
        await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
        return res.status(200).json({ message: "Book added to Cart" });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    },
    async removeFromCart(req,res){
        try {
            const {bookid} = req.params;
            const{id}=req.headers;
            await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });
            return res.status(200).json({ message: "Book removed from cart" });
}
       
      catch (error) {
        res.status(404).json({ message: error.message });
      }
},
async getCartBooks(req,res){
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate("cart"); 
        const cart =userData.cart.reverse();
        return res.status(200).json({ cart });

  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}
}
export  default cartController;