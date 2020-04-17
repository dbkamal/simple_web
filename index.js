const express = require('express');
const express = require('process');
const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

app.use('/', (req, res) => {
    res.send("Hello NodeJS");
});

app.listen(port, () => {
    if (env === 'production') {
        console.log("server is running on " + port + " prod mode");
    }
    else {
        console.log("server is running on " + port + " dev mode");
    }
});