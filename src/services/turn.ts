import { Prompt } from "../models/prompt";

export async function submitPrompt(data: Prompt) {
  try {
    console.log("BFF Sends prompt:", data);
    const response = await fetch("http://127.0.0.1:5555/prompt", {
      // const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("submitPrompt", result);
  } catch (error) {
    console.error(error);
  }
}
