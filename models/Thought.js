const mongoose = require("mongoose");
const { Schema } = mongoose;

const Reaction = require("./Reaction");

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize thought model
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
