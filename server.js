import express from "express";
import userRouter from "./routes/UserRouter";
import projectRouter from "./routes/ProjectRouter";
const app = express();
app.use(express.json({ inflate: true }));
app.use("/user", userRouter);
app.use("/project", projectRouter);
app.use((req, res, next) => {
  const error = new Error("Router not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({ error: error.message });
});
app.listen(process.env.PORT || 3333);
