const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public/views`));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));

app.get('/login',(req,res)=>{
    res.sendFile(`${__dirname}/public/views/login.html`)}
);
app.get('/about',(req,res)=>{
    res.sendFile(`${__dirname}/public/views/about.html`)}
);
app.get('/products',(req,res)=>{
    res.sendFile(`${__dirname}/public/views/products.html`)}
);

app.listen(3000,() => {
    // console.log(__dirname+'\\logs\\access.log');
     console.log('listening to 3000');
 })