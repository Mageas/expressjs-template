import express from "express";

import validate from "../middlewares/validateRequest";

import {
  getAuthorSchema,
  createAuthorSchema,
  updateAuthorSchema,
  deleteAuthorSchema,
} from "../schema/author.schema";

import {
  listAuthorsController,
  getAuthorController,
  createAuthorController,
  updateAuthorController,
  deleteAuthorController,
} from "../controllers/author.controller";

export const authorRouter = express.Router();

authorRouter.get("/", listAuthorsController);

authorRouter.post("/", validate(createAuthorSchema), createAuthorController);

authorRouter.get("/:id", validate(getAuthorSchema), getAuthorController);

authorRouter.put("/:id", validate(updateAuthorSchema), updateAuthorController);

authorRouter.delete(
  "/:id",
  validate(deleteAuthorSchema),
  deleteAuthorController
);
