const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = require('express').Router();
const genAI = new GoogleGenerativeAI("AIzaSyCScxkh3Jmm3miODBWLIDDEb0U4wierN88");

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}
router.post('/send', async (req, res) => {
    const msg = req.body.msg;
    const response = await generateContent(msg);
    res.json({msg: response});
});
exports.router = router;