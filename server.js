import express from "express";
import someRouter from "./router";
const app = express();
app.use(express.json({inflate:true}))
app.use("/api", someRouter);
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({ error: error.message });
});
app.listen(process.env.PORT || 3333);
