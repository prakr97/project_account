import mongoose, { SchemaTypeOptions } from 'mongoose';
const { Schema } = mongoose;

// import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    username: {
        type: String,
        // unique: true,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        // required: true
    },
    assignedUser: [{
        type: Schema.Types.ObjectId,
        ref: 'alluser'
    }],
    // assignTo: {
    //     type: String,
    // },
    status: {
        type: Boolean
    },
    createdDate: String,
    modifiedDate: String,
    accessToken: String,
    refreshToken: String
})

const roleSchema = mongoose.Schema({
    role: {
        type: String,
    },
    accessTo: [{
        type: String,
        ref: 'role'
    }],
})



const LoanSchema = mongoose.Schema({

    loanNumber: String,
    amt: String,
    duration: String,
    toCustomer: String,
    approve: Boolean
})

const ReceiptSchema = mongoose.Schema({

    toCustomer: String,
    receiptNumber: String,
    amt: String,
    approve: Boolean,
    loanNumber: String,


})

export const Loan = mongoose.model('loan', LoanSchema)

export const Receipt = mongoose.model('receipt', ReceiptSchema)

export const User = mongoose.model('alluser', userSchema)

export const Role = mongoose.model('role', roleSchema)
