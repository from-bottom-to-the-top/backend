import { Router } from "express";
import userController from "../controller/user.controller";
const route = Router();

route.get("/", userController.index);
route.post("/add", userController.create);
route.put("/update/:id", userController.update);
route.delete("/remove/:id", userController.remove);

export default route;
