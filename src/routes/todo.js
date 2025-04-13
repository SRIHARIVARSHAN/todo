const express=require('express');
const { createTodo} = require('../models/todo');
const { deleteTodo } = require('../models/todo');
const { updateTodo } = require('../models/todo');
const router=express.Router();


// router.post('/',async  (req, res) => {
//     res.send({message:'not implemented yet'});
// });

router.post('/',async  (req, res) => {
    console.log({body:req.body});
    const {title, description} = req.body;
    const todo=await createTodo(title, description);
    res.send(todo);
});
router.delete('/:id',async (req, res) => {
    const _id = req.params.id;
    const delres = await deleteTodo(_id);
    res.send(delres);
});

router.put('/:id',async (req, res) => {
    const _id = req.params.id;
    const {title, description} = req.body;
    const resp=await updateTodo(_id, title, description);
    res.send(resp);
});

module.exports=router;