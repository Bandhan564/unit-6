const mongoose = require('mongoose')

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://bandhan5660:<bandhan5660>@cluster0.8sydl.mongodb.net/?retryWrites=true&w=majority")
}