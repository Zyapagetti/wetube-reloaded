import express from "express";
import { userProfile, userProfileEdit } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit-profile", userProfileEdit);
userRouter.get("/:id", userProfile);

export default userRouter;
