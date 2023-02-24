const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    UserID: { type: String, required: true, unique: true },
    products: [
        {
            productID: { type: String, required: true },
            quantity: { type: Number, default: 1 },
        }
    ]


}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);