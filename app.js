
const express = require('express');
const cors = require('cors');
const app = express()

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/config.env" });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.json({ success: true, data: "GET Request Called Connected to Cloud" })
})

const about = require("./routes/aboutRoute");
app.use("/api", about);
const banner = require("./routes/bannerRoute");
app.use("/api", banner);
const product = require("./routes/productRoute");
app.use("/api", product);

const { connectDatabase } = require("./config/database")

connectDatabase()

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));