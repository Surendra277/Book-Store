import BestBook from "../model/favbooks.model.js";

const favbooksController={
   
    async storeFavBooks(req, res){
        try {
            const{name,price,author,image}=req.body;
            const favbooks = await BestBook.create({name,price,author,image});
            res.status(200).json(favbooks);
            } catch (error) {
                res.status(404).json({ message: error.message });
                }
            },

        async getFavBooks(req,res){
            try {
                const favbooks = await BestBook.find();
                res.status(200).json(favbooks);
                } catch (error) {
                    res.status(404).json({ message: error.message });
                    }
                    }
                
        }    
export default favbooksController;