// import functions from user control
const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controllers");

// api/users
router.route("/").get(getUsers).post(createUser);

// api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;