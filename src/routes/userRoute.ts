import { Router } from "express";
const router = Router();
const verifyToken=require("../config/verifyToken")

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
  

} from "../controllers/User.controller";
router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.put("/user/:id", updateUser, verifyToken);
router.delete("/user/:id", deleteUser, verifyToken);

export default router;