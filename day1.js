// var http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type': 'text/html'});
//     res.end('Hello NodeJS');
// }).listen(8080);


// const test = require('./test');
// console.log(test.add(2,5));

// const http = require('http')

// http.createServer(function(req,res){
//     res.write('Hello World');
//     res.end();
// }).listen(8080)



// const timeId = setTimeout(()=>{
//     console.log("This is work in 2 seconds");
// },4000);

// clearTimeout(timeId);

const timeId = setInterval(()=>{
    console.log("It work every 2 second");
},2000)

setTimeout(()=>{
    clearInterval(timeId)
},10000)
