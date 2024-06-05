const express = require("express");
const cors = require("cors");
const db = require("./app/models")
const bodyParser = require("body-parser")
const app = express();

const corsOption = {
    origin : "*"
};

const mongooseConfig = {
    useNewUrlParser : true,
    useUnifiedTopology: true
}

app.use(cors(corsOption));
app.use(express.json());
app.use(bodyParser.json());


db.mongoose.connect(db.url,mongooseConfig)
    .then(() => console.log("Databse connected"))
    .catch(error => {
        console.log(`Connection Failed : ${error}`)
        process.exit();
    })

app.get("/", (req, res) =>{
    res.json({message : "Helkhlklo"})
});

require("./app/routes/campervan.routes")(app);
require("./app/routes/auth.routes")(app);

const PORT = process.env.PORT||8000
app.listen(PORT, () => console.log(`server started at port ${PORT}`)) 
