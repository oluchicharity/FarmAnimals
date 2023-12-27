const farmModel = require("../models/models")

const create= async(req,res)=>{
try {
    const farmA= req['body']
    const farm= await farmModel['create'](farmA)
   
    if(!farm){
        return res['status'](400)['json'](`cannot create animal`)
    }else{
        return res['status'](200)['json']({message:`this animal has been created succ`, data:farm})
    }
} catch (error) {
    res['send'](error['message'])
}
}

const seeAll= async (req,res)=>{
    try {
        const farmA= req.body
        const farm= await farmModel.find(farmA)
        if(!farm){
           return  res.status(400).json(`cannot find animals`)
        }else{
          return  res.status(200).json({message:`All animals`, data:farm})
        }
    } catch (error) {
        res.send(error.message)
    }
}

const soldAnimals= async (req,res)=>{
    try {
    
        const farm= await farmModel.find({isSold:true})
        if(!farm){
            return  res.status(400).json(`cannot find sold`)
        }else{
          return  res.status(200).json({message:`All sold animals`, data:farm})
        }
    } catch (error) {
        res.send(error.message)
    }
}
const selling= async(req,res)=>{
    try {
            
        const animalId = req.params.animalId

        const farm= await farmModel.findByIdAndUpdate(animalId,{isSold:true}, {new:true})
        
        if(farm.isSold!==true){
            return  res.status(400).json(`this animal is available to be sold`)
        }
        else{
          return  res.status(200).json({message:`selling`, data:farm})
        }
        }
     catch (error) {
        res.send(error.message)
    }
}

const notSold= async (req,res)=>{
    try {
        const farmA= req.body
        const farm= await farmModel.find({isSold:false})
        if(!farm){
            return  res.status(400).json(`cannot find sold`)
        }else{
          return  res.status(200).json({message:`All sold animals`, data:farm})
        }
    } catch (error) {
        res.send(error.message)
    }
}
const matured= async (req,res)=>{
    try {
        const farmA= req.body
        const farm= await farmModel.find({isMatured:true})
        if(!farm){
            return  res.status(400).json(`no matured animals`)
        }else{
          return  res.status(200).json({message:`All matured animals`, data:farm})
        }
    } catch (error) {
        res.send(error.message)
    }
}





module.exports={
    create,seeAll,soldAnimals,notSold,matured,selling
}