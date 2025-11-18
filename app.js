const express = require('express')
const app = express()

// app.listen(3000, (err) => {
//     if (!err) {
//         console.log("server run");
        
//     } else {
//         console.log("Not Work");
        
//     }
// })

app.get('/user:id', (req, res) => {
    const UserID = req.params.id
    res.send(`User id is : ${UserID}`)
})
app.listen(3000, ()=>{
    console.log("Server is run");
})

