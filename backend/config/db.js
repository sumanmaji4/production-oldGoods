import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //useUnifiedTopology: true,
            //useNewUrlParser: true,
            //useCreateIndex: true
            //useFindAndModify: false 
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } 
    catch(error){
        console.error(`Error in dbJS: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB
