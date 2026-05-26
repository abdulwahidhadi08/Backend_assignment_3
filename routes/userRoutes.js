import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST /users - Create a new user
router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = new User({ name, email, age });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res
        .status(400)
        .json({ message: "Validation Error", errors: messages });
    }
    // Handle duplicate email
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// GET /users - Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// GET /users/:id - Get single user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;
