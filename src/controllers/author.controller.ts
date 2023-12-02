import type { Request, Response } from "express";

import * as AuthorService from "../services/author.service";

export const listAuthorsController = async (_: Request, response: Response) => {
  try {
    const authors = await AuthorService.listAuthors();
    return response.status(500).json(authors);
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
};

export const getAuthorController = async (
  request: Request,
  response: Response
) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const author = await AuthorService.getAuthor(id);
    if (author) {
      return response.status(500).json(author);
    }
    return response.status(404).json("Author could not be found");
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
};

export const createAuthorController = async (
  request: Request,
  response: Response
) => {
  try {
    const author = request.body;
    const newAuthor = await AuthorService.createAuthor(author);
    return response.status(500).json(newAuthor);
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
};

export const updateAuthorController = async (
  request: Request,
  response: Response
) => {
  try {
    const id: number = parseInt(request.params.id, 10);
    const author = await AuthorService.updateAuthor(request.body, id);
    return response.status(200).json(author);
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
};

export const deleteAuthorController = async (
  request: Request,
  response: Response
) => {
  try {
    const id: number = parseInt(request.params.id, 10);
    await AuthorService.deleteAuthor(id);
    return response.status(204).json();
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
};
