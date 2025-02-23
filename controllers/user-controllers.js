const User = require("../models/User");

module.exports = {
  // get all users
  // https:localhost:3001/api/users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get a single user by Id
  // http://localhost:3001/api/users/:userId
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "User ID not found" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a user
  // http://localhost:3001/api/users
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update a user by Id
  // http://localhost:3001/api/users/:userId
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User ID not found" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete a user by Id
  // http://localhost:3001/api/users/:userId
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }
      res.json({ message: "User deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add a new friend to their friends array
  // http://localhost:3001/api/users/:userId/friends/:friendId
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "NO User ID found" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete a friend from their friends array
  // http://localhost:3001/api/users/:userId/friends/:friendId
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndDelete(
        { _id: req.params.userId },
        { $pull: { friends: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user found with that ID" });
      }

      res.json({ message: "Friend successfully deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
