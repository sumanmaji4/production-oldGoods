import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requied: true,
        ref: 'User'
    },

    orderItems: [
        {
            name: {type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true},
            price: {type: Number, required: true },
            product: { 
                type: mongoose.Schema.Types.ObjectId,
                requied: true,
                ref: 'Product' 
            },
        }
    ],

    ShippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, requied: true },
        country: { type: String, required: true }
    },

    paymentMethod: {
        type: String,
        requied: true,
    },
    paymentResult: {
        id: {type: String},
        status: {type: String },
        update_time: {type: String },
        email_address: {type: String}
    },
    taxPrice: {
        type: Number,
        requied: true,
        default: 0.0
    },
    ShippingPrice: {
        type: Number,
        requied: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        requied: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        requied: true,
        default: false
    },
    paidAt:{
        type: Date,
    },
    isDelivered:{
        type: Boolean,
        requied: true,
        default: false,
    },
    deliveredAt:{
        type: Date,
    }



},{
    timestamps: true
})


const Order = mongoose.model('Order', orderSchema)

export default Order
