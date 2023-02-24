const mongoose = require('mongoose');
const {Boolean} =require('webidl-conversions')

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, 
{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);