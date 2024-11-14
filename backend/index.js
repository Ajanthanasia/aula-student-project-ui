require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
