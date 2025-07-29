import { Request, Response, NextFunction } from "express";
import { prompts, Prompt } from "../models/prompt";

export const createPrompt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { content } = req.body;
    const newPrompt: Prompt = { id: Date.now(), content };
    prompts.push(newPrompt);
    res.status(201).json(newPrompt);
  } catch (error) {
    next(error);
  }
};

export const getPrompts = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(prompts);
  } catch (error) {
    next(error);
  }
};

export const getPromptById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const prompt = prompts.find((p) => p.id === id);
    if (!prompt) {
      res.status(404).json({ message: "Prompt not found" });
    }
    res.json(prompt);
  } catch (error) {
    next(error);
  }
};

export const updatePrompt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { content } = req.body;
    const promptIndex = prompts.findIndex((p) => p.id === id);
    if (promptIndex === -1) {
      res.status(404).json({ message: "Prompt not found" });
      return;
    }
    prompts[promptIndex].content = content;
    res.json(prompts[promptIndex]);
  } catch (error) {
    next(error);
  }
};

export const deletePrompt = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const promptIndex = prompts.findIndex((p) => p.id === id);
    if (promptIndex === -1) {
      res.status(404).json({ message: "Prompt not found" });
      return;
    }
    const deletedPrompt = prompts.splice(promptIndex, 1)[0];
    res.json(deletedPrompt);
  } catch (error) {
    next(error);
  }
};
