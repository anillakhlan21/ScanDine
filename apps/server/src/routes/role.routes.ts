import express from 'express';
import { RoleController } from '../controllers/role.controller';

const router = express.Router();

router.post('', RoleController.createRole);

export default router;