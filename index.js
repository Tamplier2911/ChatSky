const dotenv = require("dotenv");

// catch exceptions
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

// environment
dotenv.config({ path: "./.env" });
const app = require("./app");

// server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server listening for incoming request at port: ${port}`);
});

// handle sigterm
process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED. Shutting down...");
  server.close(() => {
    console.log("Process terminated...");
  });
});

// catch rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
