const Quizz = require("../models/Quizz");

const QuizzController = {
  //* return all quizzes
  getAllQuizz: async (req, res) => {
    try {
      const questions = await Quizz.find({});
      if (questions.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No quizz found",
        });
      }
      return res.status(200).json({
        questions,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  try_aggregate: async (req, res) => {
    try {
      const data = req.body;
      const item = data.map((el) => el.answers.filter((el) => el.correct));
      // console.log(item);
      // const filter = { answers: { $in: data.answers } };
      const quizz = Quizz.aggregate([{ $matach: item }]);
      if (!quizz) {
        return res.status(404).json({
          success: false,
          message: "No quizz found",
        });
      }
      return res.status(301).json({
        success: true,
        data: quizz,
      });
    } catch (error) {
      console.log("blablobli: ", error.message);
    }
  },

  //* get one quizz by id
  getQuizz: async (req, res) => {
    try {
      const quizz = await Quizz.findById(req.params.id);
      if (!quizz) {
        return res.status(404).json({
          success: false,
          message: "No quizz found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Quizz",
        quizz: quizz,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  // *get question by id
  getQuestion: async (req, res) => {
    try {
      const quizz = await Quizz.findById(req.params.quizz_id);
      if (!quizz) {
        return res.status(404).json({
          success: false,
          message: "No quizz found",
        });
      }
      const question = quizz.answers.find(
        (question) => question.id === req.params.question_id
      );
      if (!question) {
        return res.status(404).json({
          success: false,
          message: "No question found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Question",
        question: question,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // * create a quizz
  createQuizz: async (req, res) => {
    try {
      const questions = await Quizz.create(req.body);
      return res.status(201).json({
        questions,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = QuizzController;
