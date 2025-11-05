import { Router } from "express";
import {getAllUsers ,getUser, updateUser, creteUser, deleteUser} from "../controllers/userControllers.js";

 export const userRouter = Router();

// userRouter.get("/", getAllUsers);
// userRouter.get("/:id", getUser);
// userRouter.post("/", creteUser);
// userRouter.put("/:id", updateUser);
// userRouter.delete("/:id", deleteUser);

userRouter.route("/").get(getAllUsers).post(creteUser);

userRouter.route("/:id").get( getUser).put( updateUser).delete( deleteUser);




