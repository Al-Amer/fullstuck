import type{ Request, Response } from "express";



export const getAllCategories = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Get all categories" });
        console.log("controllers/getAllCategories");
        
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getCategories  = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Get User" });
        console.log("controllers/getCategories");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const creteCategories  = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Create User" });
        console.log("controllers/creteCategories");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateCategories  = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Update User" });
        console.log("controllers/updateCategories");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteCategories  = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Delete User" });
        console.log("controllers/deleteCategories");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};