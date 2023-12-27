const express= require("express");
const router= require("./router/router")
const app = express();
app.use(express.json());


app.get("/api/v1",(req,res)=>{
    res.send(`Welcome to my farm`)
})
app.use("/api/v1",router)


const port= 5050
require("./dbconfig/config")
app.listen(port,()=>{
    console.log(`listening on port:${port}`)
})