import express from "express"

import { login, logout, getUser, myProfile, contact, updateUser, addTimeLine, addProject, deleteTimeLine, deleteProject } from "../controllers/userController.js";
import { isAuntheticated } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login)
userRouter.route("/logout").get(logout)
userRouter.route("/user").get(getUser)
userRouter.route("/me").get(isAuntheticated, myProfile)

userRouter.route("/admin/update").put(isAuntheticated, updateUser)
userRouter.route("/admin/timeline/add").post(isAuntheticated, addTimeLine)
userRouter.route("/admin/project/add").post(isAuntheticated, addProject)

userRouter.route("/admin/timeline/:id").delete(isAuntheticated, deleteTimeLine)
userRouter.route("/admin/project/:id").delete(isAuntheticated, deleteProject)

userRouter.route("/contact").post(contact)