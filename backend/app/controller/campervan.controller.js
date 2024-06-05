const db = require("../models")
const campervan = db.campervan;

 exports.create = (req, res) =>{
    campervan.create(req.body)
        .then(() => res.send({message : "Data Created"}))
        .catch(err => res.status(500).send({message : err.message}))
 };

 exports.findAll = (req, res) =>{
    campervan.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message : err.message}))
 }

 exports.findById = (req, res) =>{
    const id = req.params.id;
    campervan.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message : err.message}))
 };

 exports.delete = (req, res) =>{
    const id = req.params.id;
    campervan.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message : "No Data Found"})
            }

            return res.send({message : "Data successfully Deleted"})
        })
        .catch(err => res.status(500).send({message : err.message}))

 };

 exports.update = (req,res) =>{
    const id = req.params.id;
    campervan.findByIdAndUpdate(id, req.body, {useFindAndModify : false})
        .then(data =>{
            if(!data){
                res.status(404).send({message : "No Data Found"})
            }

            return res.send({message : "Data successfully updated"})
        })
        .catch(err => res.status(500).send({message : err.message}))

 }