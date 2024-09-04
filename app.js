const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes')

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',userRoutes)
app.use('/admin',adminRoutes)

app.listen(PORT,() => console.log(`Server started running on http://localhost:${PORT}`))