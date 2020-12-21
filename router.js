import { Router } from "express";
import { db } from "./database";
const route = Router();
import userController from "./controller/user.controller";

route.get("/", userController.index);
route.post("/add", userController.create);
route.put("/update/:id", userController.update);
route.delete("/remove/:id", userController.remove);

export default route;
