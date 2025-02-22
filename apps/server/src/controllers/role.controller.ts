import { Request, Response } from "express";
import { RoleService } from "../services/role.service";

export class RoleController{
   static async createRole(req: Request, res: Response){
    try {
        const roleData = req.body;
        const newRole = await RoleService.createRole(roleData);
        console.log(newRole);
        return res.status(201).json(newRole);
    } catch (error) {
        return res.status(500).json({message: 'Not able to create role.'})
    }
    }
}   