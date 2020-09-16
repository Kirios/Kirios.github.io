const express = require('express')
const path = require('path')
module.exports = app => {
  app.get("/api", (req, res) => {
    res.json({ message: "welcome" })
  });

  app.use("/api/article", require("./article"))
  app.use("/api/tag", require("./tag"))
  app.use("/api", require("./other"))
  app.use("/api/qqms", require("./qqmusic"))
  app.use("/user", require("./user"))
  app.use("/docs", require("./docs"))
  app.use("/upload", require("./upload"))
};
