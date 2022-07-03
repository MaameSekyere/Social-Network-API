const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max: 280,
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
    username: {
      type: String,
      require: true,
    },
    reactions: [ReactionSchema],
  },
  timestamps: true,
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;