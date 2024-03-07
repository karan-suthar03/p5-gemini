const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCScxkh3Jmm3miODBWLIDDEb0U4wierN88");

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const readline =  require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  console.log(response);
  run();
}
function run(){
  readline.question('Write a prompt: ', async (prompt) => {
    await generateContent(prompt);
  });
}

run();