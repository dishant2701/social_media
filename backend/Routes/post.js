const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../Controllers/post");
const { isAuthenticated } = require("../Middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost);
router.route("/post/:id").put(isAuthenticated, updateCaption);
router.route("/post/:id").delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
router.route("/post/comment/:id").put(isAuthenticated, commentOnPost);
router.route("/post/comment/:id").delete(isAuthenticated, deleteComment);

module.exports = router;
