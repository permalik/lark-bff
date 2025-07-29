import express from "express";
import cors from "cors";
import promptRoutes from "./routes/promptRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  }),
);
app.use(express.json());
app.use("/api/prompts", promptRoutes);
app.use(errorHandler);

export default app;
