import express from "express"
import connectDB from "./config/db"
// @ts-ignore
import cors from "cors"
import config from "./config/default";
import Url from "./models/url";

const app = express();
const POST = 5000;
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
};
// @ts-ignore
const generateCode = async (length) => {
  let code = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let url = await Url.findOne({code})
  if (url) {
    await generateCode(8)
  }
  return code;
}

connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})

app.get("/", async (req, res) => {
  // res.json({message: 'pass!'})
  try {
    let urls = await Url.find().sort({$natural: 1})
    if (!urls) {
      res.status(500).json({error: true, message: "Server error"})
    }
    res.json(urls)
  } catch (e) {
    console.log(e)
    res.status(500).json({error: true, message: "Server error"})
  }
})

app.post("/shorten", async (req, res) => {
  const {originalUrl} = req.body
  const baseURL = config.baseURL
  const code = await generateCode(8)
  try {
    let url = await Url.findOne({originalUrl})
    let nUrl = false
    if (!url) {
      const newUrl = baseURL + "/" + code
      url = new Url({
        code,
        originalUrl,
        newUrl,
        date: new Date()
      })
      await url.save()
      nUrl = true
    }
    res.json({url, nUrl})
  } catch (e) {
    console.log(e)
    res.status(500).json({error: true, message: "Server error"})
  }
})

app.get("/:code", async (req, res) => {
  try {
    let url = await Url.findOne({code: req.params.code})
    if (url) {
      // @ts-ignore
      res.json(url)
    } else {
      res.status(404).json({error: true, message: "No url"})
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({error: true, message: "Server error"})
  }
})

app.listen(POST, () => console.log(`Server running on port ${POST}`));
export default app