const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    code: String,
    originalUrl: String,
    newUrl: String,
    date: {type: Date, default: new Date()}
})

const model = mongoose.model("url", schema)

export default model