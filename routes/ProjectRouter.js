import express from "express";
import projectController from "../controller/projectController";
const router = express.Router();

router.get("/", projectController.index)
      .post("/add", projectController.create);
export default router;
