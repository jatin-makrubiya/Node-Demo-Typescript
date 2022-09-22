import mongoose from 'mongoose';


export default function () {
    try {
        mongoose.connect('mongodb://localhost:27017', (err) => {
            if (err) {
                console.error('error ', err)
            }
            else {
                console.log('MongoDB connected')
            }
        })
    } catch (error) {
        console.error('err ', error)
    }
}
