import type { Request, Response } from "express";

export const getAllProducts = (req: Request, res :Response) => {
    try{
        res.status(200).json({message: "Get all Products"});
        console.log("controllers/getAllProducts");
    }catch(error){
        console.log(`Error ${error}`);
        res.status(500).json({message : `server Error , ${error}`});
    }
}


export const getProduct = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Get User" });
        console.log("controllers/getProduct");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const creteProduct = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Create User" });
        console.log("controllers/creteProduct");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateProduct = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Update User" });
        console.log("controllers/updateProduct");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteProduct = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Delete User" });
        console.log("controllers/getAllProducts");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};