import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import log from "./utils/logger";

import { authorRouter } from "./routes/author.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/authors", authorRouter);

app.listen(PORT, () => {
  log.info(`Server listing on port ${PORT}`);
});
