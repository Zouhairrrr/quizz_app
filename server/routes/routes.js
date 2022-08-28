const router = require("express").Router();
const middleware = require("../middlewares/index");
const QuizzController = require("../controllers/QuizzController");

router.get("/", QuizzController.getAllQuizz);
router.post("/create", QuizzController.createQuizz);
router.get("/aggregate", QuizzController.try_aggregate);
router.get("/:id", QuizzController.getQuizz);

router.get("/:quizz_id/question/:question_id", QuizzController.getQuestion);
module.exports = router;
