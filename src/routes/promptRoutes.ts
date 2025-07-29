import { Router } from "express";
import {
  createPrompt,
  getPrompts,
  getPromptById,
  updatePrompt,
  deletePrompt,
} from "../controllers/promptController";

const router = Router();

router.get("/", getPrompts);
router.get("/:id", getPromptById);
router.post("/", createPrompt);
router.put("/:id", updatePrompt);
router.get("/:id", deletePrompt);

export default router;
