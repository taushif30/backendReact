const { bollywood, hollywood,food, sports, technology, } = require("../routing/dummyData")

const bollywoodController =(req,res)=>{
    return res.send(bollywood)
}

const hollywoodController = (req,res)=>{
    return res.send(hollywood)
}

const technologyController = (req,res)=>{
    return res.send(technology)
}

const foodCcontroller = (req,res)=>{
    return res.send(food)
}

const sportsController = (req,res)=>{
    return res.send(sports)
}
module.exports = {bollywoodController,hollywoodController,technologyController,foodCcontroller,sportsController}