var fs = require('fs')

try{
    const data = fs.readFileSync('lesson.txt','utf-8');
    console.log(data);
}
catch(error){
    console.log("error in read file".error);
    
}
