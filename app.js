const express = require("express")
const scrape = require("./scrap")
const app = express()


app.get("/hotels",(req,res)=>{
    scrape.searchHotels()
        .then(result=>{
            res.send(result)
        }).catch(e=>{
            res.send("Error")
        })
})

app.listen(3000,()=>{console.log("Server is up on port 3000")})