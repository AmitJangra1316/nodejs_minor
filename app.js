const express=require('express');
const mongoose=require('mongoose');
const hbs =require('hbs');
const alert = require('alert');

const User=require('./models/message');
const path = require('path');;
const port = process.env.PORT || 3000;

const app = express();

const staticpath=path.join(__dirname,'./public');
const templatespath=(path.join(__dirname,'./templates/views'));
const partialpath=path.join(__dirname,'./templates/partials');

app.use('/css',express.static(path.join('./node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join('./node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join('./node_modules/jquery/dist')));
app.use(express.static(staticpath));
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine','hbs');
app.set('views',templatespath);
hbs.registerPartials(partialpath);

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/contact', (req, res) => {
    res.render('contact')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio')
});

app.post('/contact',async (req,res)=>{
    // res.send(req.body)
    const data = new User(req.body);
    await data.save();
    res.status(201).render('index');
    alert('successfully saved');
})

main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://jenkincoder:eHrSDbqzvKDy0v3j@cluster0.wxoptfd.mongodb.net/ecommerce?retryWrites=true&w=majority')
console.log('database connection started');
}

app.listen(port,()=>{

   console.log('server started')
});

