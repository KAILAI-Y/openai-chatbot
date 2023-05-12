# OpenAI Chatbot with React and Express

This project is a simple chatbot application that uses OpenAI's GPT-3 model to generate responses. It's built with React on the frontend, Express on the backend, and uses OpenAI's API for chat completion.

## Project Structure

The project is split into two main parts:

- `client`: This is the frontend of the application, built with React. It contains components for displaying the chat log and inputting new messages.
- `server`: This is the backend of the application, built with Express. It handles requests from the frontend, forwarding them to the OpenAI API and returning the responses.

## Setup

To run this project, follow these steps:

###### 1. Clone the repository:

```bash
git clone <repository-url>
```

###### 2. Install dependencies:
   
Navigate to both the `client` and `server` directories in separate terminal windows and install the necessary dependencies using:

```bash
npm install
```

###### 3. Set up the OpenAI API:

You'll need an API key from OpenAI. Once you have this, create a `.env` file in the server directory with the following content:

```bash
OPENAI_API_KEY=your-api-key
```

Replace `your-api-key` with your actual OpenAI API key.

###### 4. Start the application:

Start the backend by navigating to the server directory and running:
```bash
cd server
npm start
```
Start the frontend by navigating to the client directory and running:
```bash
cd client
npm start
```


##Usage

Once you've started the application, you can interact with the chatbot by typing messages into the input field and pressing the 'Send' button. The chatbot's responses will appear in the chat log above the input field.