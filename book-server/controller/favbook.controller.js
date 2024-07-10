import User from "../model/user.model.js";

const favbooksController = {
  async storeFavBooks(req, res) {
    try {
      const { bookid, id } = req.headers;
      const userData = await User.findById(id);
      const isBookFav = userData.favourites.includes(bookid);
      if (isBookFav) {
        return res
          .status(400)
          .json({ message: "Book is already in your favourites list." });
      }
      await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
      return res.status(200).json({ message: "Book added to Favorite list" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  async removeFavBooks(req, res) {
    try {
      const { bookid, id } = req.headers;
      const userData = await User.findById(id);
      const isBookFav = userData.favourites.includes(bookid);
      if (isBookFav) {
        await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
      }
     
      return res.status(200).json({ message: "Book removed from Favorite list" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

//   async getFavBooks(req,res){
//     try {
//         const { id } = req.headers;
//         const userData = await User.findById(id).populate("favourites"); 
//         const favoriteBook =userData.favourites;
//         console.log(favoriteBook);
//         return res.status(200).json({ favoriteBook });

//   }
//   catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }
}
export default favbooksController;
     