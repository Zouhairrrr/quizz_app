const mongoose = require("mongoose");
// agrregate , find ????
// 
const QuizzScema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  answers: [
    {
      label: {
        type: String,
        required: true,
      },
      correct: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const Quizz = mongoose.model("Quizz", QuizzScema);
module.exports = Quizz;
