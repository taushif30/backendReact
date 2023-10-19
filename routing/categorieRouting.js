const { technologyController,bollywoodController,hollywoodController, foodCcontroller, sportsController } = require('../controller/categorycontroller');
const {bollywood,hollywood,fitness} = require ('../routing/dummyData')
const categoryRouter = require ("express").Router();
const auth = require('../middleware/auth')
categoryRouter.get("/bollywood",auth,bollywoodController);
categoryRouter.get("/hollywood",hollywoodController);
categoryRouter.get("/technology",technologyController);
categoryRouter.get("/food",foodCcontroller);
categoryRouter.get("/sports",sportsController);

module.exports = categoryRouter