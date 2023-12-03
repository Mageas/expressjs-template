import type { Request, Response } from "express";

import * as AuthorService from "../services/author.service";

export const listAuthorsController = async (req: Request, res: Response) => {
  try {
    const authors = await AuthorService.listAuthors();
    return res.status(200).json(authors);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const getAuthorController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const author = await AuthorService.getAuthor(id);
    if (author) {
      return res.status(200).json(author);
    }
    return res.status(404).json("Author could not be found");
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const createAuthorController = async (req: Request, res: Response) => {
  try {
    const author = req.body;
    const newAuthor = await AuthorService.createAuthor(author);
    return res.status(200).json(newAuthor);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const updateAuthorController = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const author = await AuthorService.updateAuthor(req.body, id);
    return res.status(200).json(author);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const deleteAuthorController = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await AuthorService.deleteAuthor(id);
    return res.status(204).json();
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
