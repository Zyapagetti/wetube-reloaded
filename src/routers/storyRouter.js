import express from "express";
import {
  stories,
  storiesEdit,
  storiesDelete
} from "../controllers/storyControllers";

const storyRouter = express.Router();

storyRouter.get("/:id/edit", storiesEdit);
storyRouter.get("/:id/delete", storiesDelete);
storyRouter.get("/:id", stories);

export default storyRouter;
