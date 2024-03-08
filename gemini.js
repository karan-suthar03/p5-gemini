const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = require('express').Router();
const genAI = new GoogleGenerativeAI("AIzaSyCScxkh3Jmm3miODBWLIDDEb0U4wierN88");

const model = genAI.getGenerativeModel({ model: "gemini-pro"});
const fs = require('fs');
async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}
router.post('/send', async (req, res) => {
    try {
        const msg = req.body.msg;
        const response = await generateContent(`write a code for p5.js and dont use any other thing other then p5.js dont use drawing context and other things just pure p5.js and if  with the canvas size of window width-1px by window height-1px which includes following conditions with no comments: ${msg}`);

//        const response = await generateContent(`${msg}`);

// Split the response by newline characters
        let lines = response.split('\n');

        lines.shift();
        lines.pop();

        let code = lines.join('\n').trim();
        fs.writeFileSync('public/sketch.js', code);
        res.json({msg: code});
    } catch (e) {
        res.json({msg: e.message});
    }

});
exports.router = router;