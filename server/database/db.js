import mongoose from 'mongoose'


const connection = () => {
    // const URL = `mongodb+srv://${username}:${password}@cluster0.09bgybz.mongodb.net/?retryWrites=true&w=majority`
    // const URL = 'mongodb+srv://prakhar:prakhar@cluster0.09bgybz.mongodb.net/?retryWrites=true&w=majority'

    try {
        mongoose.connect(process.env.URL, { useunifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('error while connecting with db', error);
    }

}

export default connection;