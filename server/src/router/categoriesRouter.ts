import { Router } from "express";
import { getAllCategories, getCategories, updateCategories, deleteCategories, creteCategories } from "../controllers/categoriesControllers.js";


export const categoriesRouter = Router();

categoriesRouter.route("/").get(getAllCategories).post(creteCategories);

categoriesRouter.route("/:id").get( getCategories).put( updateCategories).delete( deleteCategories);


