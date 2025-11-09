import type{ Request, Response } from "express";



export const getAllUsers = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Get all users" });
        console.log("controllers/getAllUsers");
        
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getUser = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Get User" });
        console.log("controllers/getUser");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const creteUser = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Create User" });
        console.log("controllers/creteUser");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateUser = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Update User" });
        console.log("controllers/updateUser");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteUser = (req: Request, res: Response) => {
    try{
        res.status(200).json({message: "Delete User" });
        console.log("controllers/deleteUser");
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};