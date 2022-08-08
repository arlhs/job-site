const express = require("express");
const app = express();


app.get('/', (req, res) => {
    console.log("Congratulation your first endpoint is created");
    res.status(200).send('Hello World!');
});

app.listen(3000);