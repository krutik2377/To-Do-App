//write basic express boilerlater ConvolverNode,
// with express.json().middleware

const express = require("express");
const { createTodo, updateTodo } = require("./type")
const app  = express();

app.use(express.json());

app.post("", function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }
})


app.get("", function(req,res) {
    
})

app.put("", function(req,res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the Wrong inputs";
        })
        return;
    }
})