import express from "express";
const PORT = 8081;
const app = express();

app.get("/", (_req, res) => {
  res.json({ cat: "foo" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
