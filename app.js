const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./Routes/auth');
const profileRoutes = require('./Routes/profile');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/profile', profileRoutes);
app.use('/', authRoutes);

app.get('/', (req,res) => {
    res.json(database.users);  
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on ${PORT}`)})