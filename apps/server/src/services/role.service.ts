import { Role } from "../interfaces/role.interface";
import { RoleModel } from "../models/role.model";

export class RoleService{
   static async createRole(roleData: Role){
        try {
            return await RoleModel.create(roleData);
        } catch (error) {
            console.log(error);
            throw new Error('Error creating Role.');
        }
    }

    static async getRoles(){
        try {
            return await RoleModel.find();
        } catch (error) {
            throw new Error('Error fetching Roles.');
        }
    }

    static async getRoleById(id: string){
        try {
            return await RoleModel.findById(id);
        } catch (error) {
            throw new Error('Error fetching Role.');
        }
    }

    static async updateRoleById(id: string, roleData: Role){
        try {
            return await RoleModel.findByIdAndUpdate(id, roleData);
        } catch (error) {
            throw new Error('Error updating Role.');
        }
    }

    static async deleteRoleById(id: string){
        try {
            return await RoleModel.deleteOne({id});
        } catch (error) {
            throw new Error('Error deleting Role.');
        }
    }
}