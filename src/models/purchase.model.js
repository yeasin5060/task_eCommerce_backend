import mongoose ,{Schema} from "mongoose";

const purchaseSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    product : {
        type : Schema.Types.ObjectId,
        ref : 'Product'
    },
    quantity : {
        type : Number,
        default : 0
    },
    totalAmount : {
        type : Number,
        default : 0
    },
    PaymentMethod : {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'],
        required: true
    }
},{timestamps : true})


export const Purchase = mongoose.model.Purchase ?? mongoose.model("Purchase" , purchaseSchema)