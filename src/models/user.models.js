import mongoose , {Schema} from "mongoose";

const userSchema = new Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    address : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    }
} ,{
    timestamps : true
})


export const User = mongoose.model.User ?? mongoose.model('User' , userSchema);