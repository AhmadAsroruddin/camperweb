const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose =>{
    const schema = mongoose.Schema(
        {
            category : String,
            description : String,
            address : String,
            email : String,
            city: String,
            name :String,
            province :String,
            ownerId:String,
            contactInfo:String,
            price: String,
            imageUrl : String,
        },
        {
            timestamps: true
        }
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
         
        return object;
    })

    return mongoose.model("campervan", schema);
}