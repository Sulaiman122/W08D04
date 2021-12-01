const express = require('express')
const  {getTodos ,createTodo, deleteTodo, updateTodo, getTodosById} = require('./../controllers/post')
const commentRouter = express.Router()
const authentication = require("../middlewares/authentication");

// todoRouter.get("/todos",authentication, getTodos);
// todoRouter.get("/todos/:id",authentication, getTodosById);
// todoRouter.post("/todo",authentication, createTodo);
// todoRouter.put("/todo/:id", authentication, updateTodo);
// todoRouter.delete("/todo/:id",authentication, deleteTodo);


module.exports = commentRouter;