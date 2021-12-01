const express = require('express')
const  {getPosts ,getPostById, createPost, updatePost, deletePost} = require('./../controllers/post')
const postRouter = express.Router()
const authentication = require("../middlewares/authentication");

postRouter.get("/posts",authentication, getPosts);
postRouter.get("/posts/:id",authentication, getPostById);
postRouter.post("/post",authentication, createPost);
postRouter.put("/post/:id", authentication, updatePost);
postRouter.delete("/post/:id",authentication, deletePost);


module.exports = postRouter;