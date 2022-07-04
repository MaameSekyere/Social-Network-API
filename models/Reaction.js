const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      if (date) return date.toISOString().split("T")[0];
    },
    createdAt: {
      type: Date,
      get: (date) => timeSince(date),
    },
    updatedAt: {
      type: Date,
      get: (date) => timeSince(date),
    },
  },
  id: false,
});

module.exports = ReactionSchema;
