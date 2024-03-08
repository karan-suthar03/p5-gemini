const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = require('express').Router();
const fs = require('fs');
module.exports = (GENERATIVE_API_KEY) =>{

    let chat;
    function start(){
        const genAI = new GoogleGenerativeAI(GENERATIVE_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: "Your task is to generate full p5.js sketches based solely on user responses. Your responses should consist only of valid and complete p5.js code.\n" +
                        "\n" +
                        "You're expected to understand user inputs and produce corresponding full p5.js sketches accurately without any prior training.\n" +
                        "\n" +
                        "Your goal is to directly translate user responses into complete p5.js sketches without the need for training data or learning.\n" +
                        "\n" +
                        "Focus on producing high-quality code that creates meaningful visual output when executed.\n" +
                        "\n" +
                        "You'll interact with users in real-time, receiving textual prompts and responding with full p5.js code sketches with no comments.\n" +
                        "\n" +
                        "Adaptability and responsiveness are essential in your interactions with users. Aim to understand their intent and generate appropriate p5.js code accordingly.\n" +
                        "\n" +
                        "Continuously strive to generate complete and accurate p5.js sketches based solely on user input without any update suggestions.\n" +
                        "\n" +
                        "You are created by Karan Suthar, a BBA CA student, specifically for the purpose of creating and animating shapes using p5.js.\n" +
                        "\n" +
                        "Your primary function is to translate user instructions into visually appealing p5.js sketches, focusing on the manipulation and animation of shapes.\n"
                },
                {
                    role: "model",
                    parts: "```js\n" +
                        "function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  fill(0);\n" +
                        "  textSize(32);\n" +
                        "  textFont(\"Arial\");\n" +
                        "  textAlign(CENTER, CENTER);\n" +
                        "  text(\"ok\", width / 2, height / 2);\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "sketch that draws a green rectangle at coordinates (100, 100) with a width of 200 pixels and a height of 150 pixels.",
                },{
                    role: "model",
                    parts: "```js\n" +
                        "function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  fill(0, 255, 0);\n" +
                        "  rect(100, 100, 200, 150);\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "sketch that draws a blue circle at coordinates (200, 200) with a radius of 100 pixels.",
                },{
                    role: "model",
                    parts: "```js\n" +"function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  fill(0, 0, 255);\n" +
                        "  circle(200, 200, 100);\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "sketch that draws a yellow line from coordinates (50, 50) to coordinates (250, 250) with a thickness of 10 pixels.",
                },{
                    role: "model",
                    parts: "```js\n" +"function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  stroke(255, 255, 0);\n" +
                        "  strokeWeight(10);\n" +
                        "  line(50, 50, 250, 250);\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "moves a red square horizontally across the canvas."
                },{
                    role: "model",
                    parts:"```js\n" + "function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "let x = 0;\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  fill(255, 0, 0);\n" +
                        "  rect(x, 100, 50, 50);\n" +
                        "  x++;\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "make a circle",
                },{
                    role: "model",
                    parts: "```js\n" +"function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  circle(width / 2, height / 2, 50);\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "make it fall with gravity",
                },{
                    role: "model",
                    parts: "```js\n" +
                        "let y = 0;\n" +
                        "let speed = 1;" +
                        "let gravity = 0.1;" +
                        "function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  circle(width / 2, y, 50);\n" +
                        "  y += speed;" +
                        "   speed+= gravity;\n" +
                        "}"+"\n```",
                },{
                    role: "user",
                    parts: "make it bounce off the ground",
                },{
                    role: "model",
                    parts: "```js\n" +"let y = 0;\n" +
                        "let speed = 1;\n" +
                        "let gravity = 0.1;\n" +
                        "function setup() {\n" +
                        "  createCanvas(windowWidth - 1, windowHeight - 1);\n" +
                        "}\n" +
                        "\n" +
                        "function draw() {\n" +
                        "  background(220);\n" +
                        "  circle(width / 2, y, 50);\n" +
                        "  y += speed;\n" +
                        "  speed += gravity;\n" +
                        "  if (y > height - 25) {\n" +
                        "    speed *= -0.9;\n" +
                        "  }\n" +
                        "}"+"\n```",
                }

            ],
            generationConfig: {
                maxOutputTokens: 10000,
            },
        });
    }

    start();

    async function generateContent(prompt) {
      const result = await chat.sendMessage(prompt);
      return result.response.text();
    }
    router.post('/send', async (req, res) => {
        try {
            const msg = req.body.msg;
            //const response = await generateContent(`write a code for p5.js and dont use any other thing other then p5.js dont use drawing context and other things just pure p5.js and if  with the canvas size of window width-1px by window height-1px which includes following conditions with no comments: ${msg}`);
            const response = await generateContent(msg);
            let lines = response.split('\n');
            let code = lines.join('\n');
            if(!lines[0].includes('function setup()')) {
                lines.shift();
                lines.pop();
                code = lines.join('\n').trim();
            }
            fs.writeFileSync('public/sketch.js', code);
            res.json({msg: code});
        } catch (e) {
            res.json({error: e.message});
            start();
        }

    });
    return router;
};