import mongoose from "mongoose"
import mongo from "mongodb"
import config from "../config/default";

const db: string = config.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
        // await mongo.MongoClient.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB connected...")
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

export default connectDB
