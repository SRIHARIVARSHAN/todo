const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
}, {
    timestamps: true
});

const todomodel = mongoose.model('Todo', todoSchema);

async function createTodo(title, decsription) {
    const todo = await todomodel.create({
        title,
        decsription
    });

    return todo;
}

async function deleteTodo(_id) {
    const delres = await todomodel.deleteOne({ _id });
    return delres;
}

async function updateTodo(_id, title, description) {
    const resp = await todomodel.updateOne({ _id },
        {
            title,
            description
        });
    return resp;
}

module.exports = {
    createTodo,
    deleteTodo,
    updateTodo,
};