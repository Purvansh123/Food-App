const jwt = require('jsonwebtoken');
const user = require('../model/Users');
const User = require('../model/Users');

const varifyAdmin = async(req,res,next)=>{
    const email = req.decoded.email;
    const query = {email: email};

    const user = await User.findOne(query);
    const isAdmin = user?.role==='admin';

    if(!isAdmin){
        return res.status(403).send({message: "forbidden access"})
    }
    next();
};

module.exports = varifyAdmin;