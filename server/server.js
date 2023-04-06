require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {Configuration, OpenAIApi} = require("openai");

const app = express();
const port = 4000;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async(req, res) => {
    const { message } = req.body;
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}]
    });
    res.json({data: completion.data.choices[0].message });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



