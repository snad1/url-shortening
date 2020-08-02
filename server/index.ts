import express from "express"
const connectDB = require("./config/db")
const cors = require("cors")

const app: express.Application = express()

connectDB()

const corsOptions = {
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Credentials',
  ],
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", require("./routes/index.ts"))
// app.use("/api/shorten", require("./routes/url"))

/*app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})*/

const POST = 5000

// app.listen(POST, () => console.log(`Server running on port ${POST}`))
module.exports = app.listen(POST, () => console.log(`Server running on port ${POST}`))