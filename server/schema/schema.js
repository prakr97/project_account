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
        // required: true
    }
})

 

const LoanSchema = mongoose.Schema({

    loanId: String,
    loanNumber: String,
    amt: String,
    duration: String
})

const ReceiptSchema = mongoose.Schema({

    loanId: String,
    loanNumber: String,
    amt: String,
    duration: String
})

export const Loan = mongoose.model('loan', LoanSchema)

export const Receipt = mongoose.model('receipt', ReceiptSchema)

export const User = mongoose.model('alluser', userSchema)

export const Role = mongoose.model('role', roleSchema)
