import { Router } from 'express'
import {getAllProducts , getProduct, creteProduct, updateProduct, deleteProduct} from '../controllers/productsControllers.js';

export const productsRouter = Router();

productsRouter.route("/").get(getAllProducts).post(creteProduct);
productsRouter.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
