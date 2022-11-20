import express from "express";
import cors from "cors";
import "reflect-metadata";
import { getGames } from "./domain/Game";
const PORT = 8081;
const app = express();
app.use(cors());

app.get("/games", async (_req, res) => {
  const games = await getGames();
  res.json(games);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
