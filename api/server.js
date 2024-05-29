const express = require("express");
const cors = require("cors");
const connectDB = require("./connection.js");
const authRouter = require("./Routes/AuthRoutes");
const postRouter = require("./Routes/PostRoutes");
const userRouter = require("./Routes/UserRoutes");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.options("*", cors());
connectDB();

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});