const postModel = require("../../db/models/post");

const getPosts = (req, res) => {
  postModel
    .find({})
    // .find({ isDeleted: false, user: req.token.id })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json("no posts found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createPost = (req, res) => {
  const { desc, img, isDeleted } = req.body;
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
    .find({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  let sameUser = false;

  postModel.findOne({ _id: id, user: req.token.id }).then((result) => {
    console.log(result);
    if (result) {
      sameUser = true;
      console.log(sameUser);
    }
  });

  //here we check if it's Admin user OR the same user who created the post
  if (req.token.role == "61a4eb0e6ad0c2fe2b45d0ac" || sameUser) {
    postModel
      .findByIdAndUpdate(id, { $set: { isDeleted: true } })
      .then((result) => {
        if (result) {
          res.status(200).json("post removed");
        } else {
          res.status(404).json("post does not exist");
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.json("you don't have the priveleges to remove the post");
  }
};

const updatePost = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  postModel
    .findByIdAndUpdate(id, { $set: { name: name } })
    .then((result) => {
      if (result) {
        res.status(200).json("post is updated");
      } else {
        res.status(404).json("post has not been found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
