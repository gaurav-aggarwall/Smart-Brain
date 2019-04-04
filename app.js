const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./Routes/auth');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/', (req,res) => {
    res.send('Hello World');    
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on ${PORT}`)})