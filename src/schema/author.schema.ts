import { object, number, string } from "yup";

export const getAuthorSchema = object({
  params: object({
    id: number().required(),
  }),
});

export const createAuthorSchema = object({
  body: object({
    firstName: string().required().min(3),
    lastName: string().required().min(3),
  }),
});

export const updateAuthorSchema = object({
  params: object({
    id: number().required(),
  }),
  body: object({
    firstName: string().required().min(3),
    lastName: string().required().min(3),
  }),
});

export const deleteAuthorSchema = object({
  params: object({
    id: number().required(),
  }),
});
