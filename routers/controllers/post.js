const postModel = require("../../db/models/post");


const getPosts = (req, res) => {
  postModel
    .find({ isDeleted: false, user: req.token.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createPost = (req, res) => {
  const {desc, img, isDeleted} = req.body;
  const newPost = new postModel({ desc, img, isDeleted, user: req.token.id });
  newPost
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  postModel
    .find({ _id: id, user: req.token.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  postModel
    .findByIdAndUpdate(id, { $set: { isDeleted: true } })
    .then((result) => {
      if (result) {
        res.status(200).json("removed todo");
      } else {
        res.status(404).json("user does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updatePost = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  postModel
    .findByIdAndUpdate(id, { $set: { name: name } })
    .then((result) => {
      if (result) {
        res.status(200).json("todo is updated");
      } else {
        res.status(404).json("todo has not been found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
