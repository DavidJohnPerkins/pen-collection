const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
app.use('/pen-image', express.static(path.join(__dirname, '../../../public/pen-image')));
app.use('/ink-image', express.static(path.join(__dirname, '../../../Public/ink-image')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const displayRoutes = require('./routes/display');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(displayRoutes);

app.use(errorController.get404);

app.listen(4000);
