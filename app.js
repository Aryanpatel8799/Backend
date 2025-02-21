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



const express = require('express');
const app=express();
const morgan=require('morgan');
app.use(morgan('dev'));
app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>
{
    res.render('index'); 
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

app.post('/submit',(req,res)=>
{
  console.log(req.body);
  res.send('data received')
  
})

app.listen(3000);