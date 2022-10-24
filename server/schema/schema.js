import mongoose from 'mongoose';

// import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    houseNo: String,
    streetName: String,
    state: String,
    city: String,
    district: String,
    pincode: String,
    isAdmin: Boolean,
    isAgent: Boolean,
    isAcc: Boolean,
    accessToken: String,
    refreshToken: String
})

const customerSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    age: String,
    gender: String
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


// const AccountantSchema = mongoose.Schema({

//     name: String,
//     username: String,
//     email: String,
//     phone: String,
//     password: String
// })

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

export const User = mongoose.model('user', userSchema)

export const Customer = mongoose.model('customer', customerSchema)

export const Loan = mongoose.model('loan', LoanSchema)

// export const Accountant = mongoose.model('accountant', AccountantSchema)

export const Receipt = mongoose.model('receipt', ReceiptSchema)

