import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { notFound, errorHandler } from "./middleware/ErrorMiddleware.js";
import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

const port = process.env.PORT;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// const corsOptions = {
//   origin: "http://localhost:5173",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static("/var/data/uploads"));
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.use("/images", express.static(path.join(__dirname, "images")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
// app.use("/images", express.static(path.join(__dirname, "images")));
app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoose connected successfully"))
  .catch((err) => err);

app.listen(port, () => console.log(`server is running on port ${port}`));
