import mongoose from "mongoose";

const userSchema =new mongoose.Schema({

    fullName:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        },
     address:{
        type:String,
      //   required:true
     },
     role:{
        type:String,
        default:"user",
        enum:["user",'admin']
     },
     favourites:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books'
     },
    ],
     cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books'
     },],
     orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'order'
     }],
    },
     {timestamps:true}

)
const User = mongoose.model("User",userSchema);
export default User;