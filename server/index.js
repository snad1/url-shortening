"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connectDB = require("./config/db");
var cors = require("cors");
var app = express_1.default();
connectDB();
var corsOptions = {
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
};
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/", require("./routes/index.ts"));
// app.use("/api/shorten", require("./routes/url"))
/*app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})*/
var POST = 5000;
// app.listen(POST, () => console.log(`Server running on port ${POST}`))
module.exports = app.listen(POST, function () { return console.log("Server running on port " + POST); });
