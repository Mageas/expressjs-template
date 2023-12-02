import express from "express";

import {
  listAuthorsController,
  getAuthorController,
  createAuthorController,
  updateAuthorController,
  deleteAuthorController,
} from "../controllers/author.controller";

export const authorRouter = express.Router();

authorRouter.get("/", listAuthorsController);

authorRouter.post("/", createAuthorController);

authorRouter.get("/:id", getAuthorController);

authorRouter.put("/:id", updateAuthorController);

authorRouter.delete("/:id", deleteAuthorController);
