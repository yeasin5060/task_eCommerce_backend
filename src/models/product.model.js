import mongoose , {Schema} from 'mongoose'

const productSchema = new Schema({
    productName : {
        type : String,
        required : true,
        trim : true,
    },
    productDescription : {
        type : String,
        required : true,
        trim : true,
    },
    price : {
        type : Number,
        required : true
    },
    stockQuantity : {
        type : Number,
        default : 0
    }
},{
    timestamps : true
})


export const Product = mongoose.model.Product ?? mongoose.model("product" , productSchema);