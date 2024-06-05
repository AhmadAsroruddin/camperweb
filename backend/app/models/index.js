const dbConfig = require("../config/database")
const mongoose = require("mongoose")

module.exports ={
    mongoose,
    url: dbConfig.url,
    campervan : require("./campervan.model.js")(mongoose),
    user:require("./user.model.js")(mongoose)
}