import express from "express";
import promptRoutes from "./routes/promptRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use("/api/prompts", promptRoutes);
app.use(errorHandler);

export default app;
