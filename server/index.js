const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config();
const PORT = process.env.PORT || 8080;
const apiRoutes = require("./routes/routes");
const cors = require("cors");
const db = require("./config/db");

//* connection to db mongoDB
db(process.env.DB_URL);

//* middleware to enable cors for all routes
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! define routes

app.use("/api/quizzes", apiRoutes);



// ! start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
