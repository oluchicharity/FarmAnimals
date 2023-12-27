const auth= (req,res,next)=>{
    req.reqTime=Date() 
   console.log(`this API was called on ${req.reqTime}`)
    next()
}
module.exports=auth