import express from "express";
import {
  homepage,
  trendingpage,
  newpage,
  joinpage,
  loginpage,
  userpage
} from "../controllers/globalControllers";

const globalRouter = express.Router();

globalRouter.get("/", homepage);
globalRouter.get("/trending", trendingpage);
globalRouter.get("/new", newpage);
globalRouter.get("/join", joinpage);
globalRouter.get("/login", loginpage);
globalRouter.get("/users", userpage);

export default globalRouter;
