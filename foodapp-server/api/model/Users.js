const mongoose = require('mongoose')
const {Schema} = mongoose;

//Schema model

const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        trim: true,
        minlength: 3
    },
    photoUrl: String,
    role:{
        type: String,
        enum: ['user','admin'],
        default:'user'
    }
})

// create model
const User = mongoose.model('user',userSchema);

module.exports= User;