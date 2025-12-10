require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const HoldingModel = require("./models/HoldingModel");
const PositionModel = require("./models/PositionModel");
const OrderModel = require("./models/OrderModel");

const authRoutes = require("./routes/authRoutes");
const auth = require("./middleware/authMiddleware");

// -------------------- CONFIG --------------------
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

const app = express();

// -------------------- MIDDLEWARE --------------------
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// -------------------- HEALTH CHECK --------------------
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// -------------------- AUTH ROUTES --------------------
app.use("/api/auth", authRoutes);

// Protected test route
app.get("/protected", auth, (req, res) => {
  res.json({ message: "You are authorized!", user: req.user });
});

// -------------------- HOLDINGS ROUTES --------------------
app.get("/allHoldings", async (req, res) => {
  try {
    const allHolding = await HoldingModel.find({});
    res.json(allHolding);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching holdings");
  }
});

// -------------------- POSITION ROUTES --------------------
app.get("/allPosition", async (req, res) => {
  try {
    const allPosition = await PositionModel.find({});
    res.json(allPosition);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching positions");
  }
});

// -------------------- ORDER ROUTES --------------------
app.get("/orders", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const userOrders = await OrderModel.find({ userId }).sort({
      createdAt: -1,
    });
    res.json(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

app.post("/newOrder", auth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res
        .status(400)
        .json({ message: "Missing required order fields" });
    }

    const newOrder = new OrderModel({
      name,
      qty,
      price,
      mode,
      userId: req.user.id,
    });

    await newOrder.save();

    res.json({
      message: "Order successfully placed",
      order: newOrder,
    });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ message: "Error saving order" });
  }
});

// -------------------- START SERVER --------------------
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Backend started on port ${PORT}`)
    );
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

startServer();
