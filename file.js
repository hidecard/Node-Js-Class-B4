var fs = require('fs')


    // try{
    //     const data = fs.writeFileSync('lesson.php','h1');
    //     console.log(data);
    // }
    // catch(err){
    //     console.log(err);
    // }

    // fs.writeFileSync('lesson.txt','Hello edit is here');
    // console.log("Success");


    // fs.mkdirSync('newfolder');
    // console.log("success");

    // fs.unlinkSync('test.js');
    // console.log('success');

    // fs.rename('name.txt','nameone.txt',(err)=>{
    //     if(err){
    //         console.log("error");
    //         // return;
    //     }
    // });
    // console.log("success");

// const readstram = fs.createReadStream('name.txt',{ encoding : 'utf-8' });

// readstram.on('data' , (aaa) => {
//     console.log(aaa);
    
// } )
// readstram.on('end',()=>{
//     console.log("have finishes");
    
// })
// readstram.on('error',()=>{
//     console.log("error");
    
// })



const writestream = fs.createWriteStream('output.txt')
writestream.write('Hello !');
writestream.write('Hello Node Js.\n');
writestream.write('Hello test')
writestream.end("Finish")
writestream.on('finish',()=>{
    console.log('finish');
})



