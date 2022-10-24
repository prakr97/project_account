import mongoose from 'mongoose';

const tokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    }
})

export const token = mongoose.model('token', tokenSchema)