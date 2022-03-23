const dotenv = require('dotenv')
dotenv.config()

const express = require('express')


const app = express()

app.get('/',(req,res)=>{
    try {
        return res.status(200).json({data:"Hello World",error:false})
    } catch (error) {
        console.log(error);
    }
})


const port = 5000

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})