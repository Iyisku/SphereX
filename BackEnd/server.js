const express = require('express');
const app = express();


app.get('/', (req, res) => {    
    res.send('Hello World');
});

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});