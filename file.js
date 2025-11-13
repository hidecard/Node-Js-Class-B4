var fs = require('fs')

try{
    // const data = fs.readFileSync('lesson.txt','utf-8');
    // console.log(data);

    fs.writeFileSync('lesson.txt','Hello edit is here');
    console.log("Success");
    
}
catch(err){
    console.log("error in read file",err);
    
}
