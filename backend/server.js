require("dotenv").config();
const mongoose = require("mongoose"); // Add this line

const app = require("./app");

const PORT = process.env.PORT || 3000;

// Add MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

console.log("✅ API Key Loaded:", process.env.GOOGLE_GEMINI_KEY ? "Yes" : "No");

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
