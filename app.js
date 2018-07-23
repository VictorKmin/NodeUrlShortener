const express = require('express');
let bodyParser = require('body-parser');
let exprshndl = require('express-handlebars');
let path = require('path');
//TODO дописати всі залежності та підключити базу Postg

let app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.engine('.hbs', exprshndl({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, 'views', 'layout', 'main.hbs')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    res.render('index')
});

app.post('/saveUrl', function (req, res) {
    // TODO передати сюда парметрі з форми чреез body-parser
    res.render('index');
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('OK')
    }
});