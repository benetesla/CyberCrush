const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    UserID: { type: String, required: true, unique: true },
    products: [
        {
            productID:
                { type: String, required: true },
            quantity:
                { type: Number, default: 1 },
        }
    ],
    amount: { type: Number, required: true },
    userAdrees: { type: object, required: true },
    status: { type: String, default: 'pending' },


}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);