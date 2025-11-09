import type { Request, Response } from "express";


export const getAllOrders =  (req: Request, res:Response) =>{
    try{
        res.status(200).json({message: "Get all Orders"});
        console.log("controllers/getAllOrders");
    }catch(error){
        console.log(`Error ${error}`);
        res.status(500).json({message : `server Error , ${error}`});
    }
}
export const getOrders = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Get User" });
        console.log("controllers/getOrders");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const creteOrders = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Create User" });
        console.log("controllers/creteOrders");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateOrders = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Update User" });
        console.log("controllers/updateOrders");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteOrders = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Delete User" });
        console.log("controllers/deleteOrders");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

