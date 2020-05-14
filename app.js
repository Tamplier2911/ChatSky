const express = require("express");
const path = require("path");
const enforce = require("express-sslify");
const compression = require("compression");
const cors = require("cors");

// app instance
const app = express();

// cors
app.use(cors());
app.options("*", cors());

if (process.env.NODE_ENV === "production") {
  // compress all response bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(
    express.static(path.join(__dirname, "client/build"), {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        const hashRegExp = new RegExp("\\.[0-9a-f]{8}\\.");
        if (path.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        } else if (hashRegExp.test(path)) {
          res.setHeader("Cache-Control", "max-age=31536000");
        } else if (
          path.endsWith(".ico") ||
          path.endsWith(".png") ||
          path.endsWith(".jpg") ||
          path.endsWith(".jpeg")
        ) {
          res.setHeader("Cache-Control", "max-age=31536000");
        }
      },
    })
  );

  // on request to any route that is not covered - send index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// send service worker on request
app.get("./service-worker.js", (req, res) => {
  res.sindFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

module.exports = app;
