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


//adding user to DB

app.get('/register',(req,res)=>
{
    res.render('register');
})

app.post('/register',async (req,res)=>
{
    const { username , email , password } = req.body;
    if(!User.findOne({email:email}))
    {
    await User.create(
        {
            username:username,
            email:email,
            password:password,
        }
    )
    res.send('user register')
   }
   else{
    res.send('user already exist');
   }
})

// Reading user from database

app.get('/users-Data',(req,res)=>
{
    try
    {
    User.find({email:'amp8799@gmail.com'}).then((user)=>
    {
        res.send(user)
    })
}
catch(err)
{
    res.send(err);
}
})

// update user from database
app.get('/update-user',async(req,res)=>
    {
        await User.findOneAndUpdate({email:'abcdefg@gamil.com'},{email:'abcdefg@gmail.com'}).then((user)=>
        {
           console.log("user updated");
           res.send(user)
        })
        
    })

app.get('/delete-user',async(req,res)=>
{
    await User.findOneAndDelete({email:'amp1234@gamsil.com'}).then((user)=>
    {
      res.send(user);
    })
})


app.listen(3000);