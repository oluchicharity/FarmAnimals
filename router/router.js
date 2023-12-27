const express= require("express");
const{create, seeAll, soldAnimals, notSold, matured,selling}=require("../controller/controller");
const midd= require("../middleware/authentication")

const router= express.Router()


router.post("/create",midd, create)
router.get("/seeAll",midd, seeAll)
router.get("/sold",midd,soldAnimals)
router.get("/notsold", midd,notSold)
router.put("/selling/:animalId", midd, selling)
router.get("/maturity",midd,matured)

module.exports= router
