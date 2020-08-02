import express from "express"
import config from "config"
import Url from "../models/url"

const router = express.Router()

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

router.post("/", async (req, res) => {
  const {originalUrl} = req.body
  const baseURL = config.get("baseURL")
  const code = await generateCode(8)
  try {
    let url = await Url.findOne({originalUrl})
    if (!url) {
      const newUrl = baseURL + "/" + code
      url = new Url({
        code,
        originalUrl,
        newUrl,
        date: new Date().getDate()
      })
      await url.save()
    }
    res.json(url)
  } catch (e) {
    console.log(e)
    res.status(500).json({error: true, message: "Server error"})
  }
})

module.exports = router