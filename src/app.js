const express = require('express')
const path = require('path')
const fs = require('fs')

const port = 3000;

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/' , (req , res) => {
    console.log("Someone has visited the home page!");

    fs.readFile('src/pages/index.ejs' , function(err , data){
        res.writeHead(200 , {'Content-Type' : 'text/html'})
        res.write(data)
        return res.end();
    })
})

app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})  