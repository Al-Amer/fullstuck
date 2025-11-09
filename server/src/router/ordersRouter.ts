import { Router } from "express"
import { getOrders, getAllOrders, updateOrders, deleteOrders, creteOrders } from "../controllers/ordersControllers.js";

export const ordersRouter = Router();

ordersRouter.route("/").get(getAllOrders).post(creteOrders);

ordersRouter.route("/:id").get( getOrders).put( updateOrders).delete( deleteOrders);

