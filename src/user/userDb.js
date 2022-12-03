import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
    uniqueId: {
        type: String,
    },

});

const User =  mongoose.model('user', userSchema);

export default User;
