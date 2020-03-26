const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    Name: String,
    Nationality: String,
    Display: Boolean
},{
    timestamps: true
})

module.exports = db.model("User", UserSchema)
