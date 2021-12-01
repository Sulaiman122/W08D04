const express = require('express')
const  {getPosts ,getPostById, createPost, updatePost, deletePost} = require('./../controllers/post')
const todoRouter = express.Router()
const authentication = require("../middlewares/authentication");

todoRouter.get("/posts",authentication, getPosts);
todoRouter.get("/posts/:id",authentication, getPostById);
todoRouter.post("/post",authentication, createPost);
todoRouter.put("/post/:id", authentication, updatePost);
todoRouter.delete("/post/:id",authentication, deletePost);


module.exports = todoRouter;