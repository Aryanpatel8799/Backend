const http=require('http');
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {    
        res.end('Welcome to our home page');
    }
    if(req.url=='/about')
    {
        res.end('Welcome to our about page');
    }
    if(req.url=='/contact')
    {
        res.end('Welcome to our contact page');
    }
    if(req.url=='/profile')
    {
        res.end('Welcome to our profile page');
    }
})
server.listen(3000);