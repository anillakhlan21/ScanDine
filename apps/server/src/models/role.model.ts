import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

export const RoleModel = mongoose.model('Role', RoleSchema);