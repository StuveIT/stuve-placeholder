const express = require('express');
const app = express();

// dotenv
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const TITLE = 'StuVe Dienste';

/* ---------------------------
        Application
--------------------------- */
app.set('trust proxy', 1) // trust first proxy
app.set('view engine', 'ejs'); // view engine
app.use('/filehost', express.static('assets')); //filehost
app.get('/robots.txt', (req, res) => res.sendFile('robots.txt', { root: './' })); // robots.txt

app.get('/', (req, res) => {
    res.render('home', { title: TITLE });
});

app.get('/datenschutz', (req, res) => {
    res.render('datenschutz', { title: TITLE })
});

app.get('/impressum', (req, res) => {
    res.render('impressum', { title: TITLE })
});

// listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
