module.exports = app =>{
    const campervan = require("../controller/campervan.controller")
    const route = require("express").Router();

    route.get("/", campervan.findAll);
    route.post("/", campervan.create);
    route.get("/:id", campervan.findById);
    route.put("/:id", campervan.update);
    route.delete("/delete/:id", campervan.delete);

    app.use("/campervan", route);


}