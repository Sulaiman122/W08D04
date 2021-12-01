const postModel = require("../../db/models/post");
const likeModel = require("../../db/models/like");
const roleModel = require("../../db/models/role");


const createComment = (req, res) => {
  const { id } = req.params;

  const { comment , isDeleted } = req.body;


  const newComment = new postModel({ comment, isDeleted, user: req.token.id, post:id });
  newComment
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const deleteComment = async (req, res) => {
  const { id } = req.params;
  let sameUser = false;

  await postModel.findOne({ _id: id, user: req.token.id }).then((result) => {
    if (result) {
      sameUser = true;
    }
  });

  const result = await roleModel.findById(req.token.role);

  //here we check if it's Admin user OR the same user who created the post
  if (result.role == "admin" || sameUser) {
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

const updateComment = async (req, res) => {
  const { id } = req.params;
  const { desc, img } = req.body;
  let sameUser = false;

  await postModel.findOne({ _id: id, user: req.token.id }).then((result) => {
    if (result) {
      sameUser = true;
    }
  });

  const result = await roleModel.findById(req.token.role);

  //here we check if it's Admin user OR the same user who created the post
  if (result.role == "admin" || sameUser) {
    postModel
      .findByIdAndUpdate(id, { $set: { desc: desc, img: img } })
      .then((result) => {
        if (result) {
          res.status(200).json("post updated");
        } else {
          res.status(404).json("post does not exist");
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.json("you don't have the priveleges to update the post");
  }
};



module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
