import express from "express"
import config from "config";
import Url from "../models/url";

const router = express.Router()

router.get("/:code", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    let urls = await Url.find().sort({$natural: -1})
    if (!urls) {
      res.status(500).json({error: true, message: "Server error"})
    }
    res.json(urls)
  } catch (e) {
    console.log(e)
    res.status(500).json({error: true, message: "Server error"})
  }
})

const generateCode = async (length: number) => {
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

router.post("/shorten", async (req, res) => {
  const {originalUrl} = req.body
  const baseURL = config.get("baseURL")
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

module.exports = router