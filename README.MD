# p5-gemini

## Description
p5-gemini is a web application that uses the Gemini AI to generate p5.js sketches based on user input. The user can enter a description of the sketch they would like to generate, and the application will use the Gemini AI to generate a p5.js sketch based on the user's input. The application is built using Node.js, Express, and the Gemini API.

## Installation
To get started with p5-gemini, follow these steps:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/your-username/p5-gemini.git
    ```
2. Navigate to the project directory:
    ```
    cd p5-gemini
    ```
3. Install dependencies using npm:
    ```
    npm install
    ```
4. Enter your Gemini API key in the `package.json` file. Replace `YOUR_API_KEY` with your actual API key:
    ```json
    "start": "set GENERATIVE_API_KEY=<YOUR_API_KEY> && node index.js"
    ```
if you don't have a Gemini API key, you can sign up for one [here](https://aistudio.google.com/app/apikey).


## Usage
Once you have installed the project and entered your Gemini API key, you can start generating p5.js sketches using text data entered by the user. To start the server, run the following command:
   ```
   npm start
   ```
This will start the server and generate a new p5.js sketch using Gemini AI. You can view the sketch by navigating to `http://localhost:3000` in your web browser.
This project is buggy and not fully functional. It is a work in progress.

## Contributing

If you would like to contribute to p5-gemini, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Submit a pull request

## Contact

If you have any questions or concerns, please feel free to contact me at [karan.suthar.lakha@gmail.com](mailto:karan.suthar.lakha@gmail.com).