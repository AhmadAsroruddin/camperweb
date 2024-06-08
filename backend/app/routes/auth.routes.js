module.exports = app =>{
    const auth = require("../controller/auth.controller")
    const route = require("express").Router();

    route.post("/register", auth.create);
    route.post("/login", auth.login);
    route.get("/:id", auth.getUserData);
    
    app.use("/auth", route);


}