const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./Routes/auth');
const profileRoutes = require('./Routes/profile');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req,res) => {
    res.json(database.users);  
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on ${PORT}`)})