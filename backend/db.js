/*
 *   Todo: {
        title:string ,
        description : string ,
        completed : boolean
 }
*/ 

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin2377:HRBYEWS7I9aRakTw@cluster0.waiqncx.mongodb.net/");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos' , todoSchema);
module.exports = {
    todo : todo
    // if key and value is same we can write above line like "todo"  not "todo:todo"
}