import express from "express"
import config from "config"
const connectDB = require("./config/db")
const cors = require("cors")

const app: express.Application = express()

connectDB()

const corsOptions = {
  origin: 'http://localhost:8080',
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

const POST = 5000

app.listen(POST, () => console.log(`Server running on port ${POST}`))