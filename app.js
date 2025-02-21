// const http=require('http');
// const server=http.createServer((req,res)=>
// {
//     if(req.url==='/')
//     {    
//         res.end('Welcome to our home page');
//     }
//     if(req.url=='/about')
//     {
//         res.end('Welcome to our about page');
//     }
//     if(req.url=='/contact')
//     {
//         res.end('Welcome to our contact page');
//     }
//     if(req.url=='/profile')
//     {
//         res.end('Welcome to our profile page');
//     }
// })
// server.listen(3000);
const User=require('./models/user');
const db=require('./config/db');
const express = require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan('dev'));
app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>
{
    res.render('index'); 
})
app.post('/',async(req,res)=>
{
    const { username , email , password } = req.body;
    await User.create(
        {
            username:username,
            email:email,
            password:password,
        }
    )
    res.send('user register ho gaya hai jalssa karo');
})
app.get('/about',(req,res)=>
{
    res.send('Welcome to our about page');
})
app.get('/contact',(req,res)=>
{
    res.send('Welcome to our contact page');
})
app.get('/profile',(req,res)=>
{
    res.send('Welcome to our profile page');
})

app.get('/register',(req,res)=>
{
    res.render('register');
})

app.post('/register',async (req,res)=>
{
    const { username , email , password } = req.body;
    await User.create(
        {
            username:username,
            email:email,
            password:password,
        }
    )
    res.send('user register')
})

app.post('/submit',(req,res)=>
{
  console.log(req.body);
  res.send('data received')
  
})

app.listen(3000);