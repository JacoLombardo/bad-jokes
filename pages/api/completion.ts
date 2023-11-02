import { openai } from "@/lib/openAI";
import { NextApiRequest, NextApiResponse } from "next";

export default async function completion(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { words } = req.body;

  const orderedWords: string = words.join(", ");

  const prompt = `Write me a joke with ${orderedWords}. Max 30 words.`;
  console.log(prompt);

  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request" });
  }

  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 50,
  });

  console.log(response);

  return res.status(200).json({
    data: response,
  });
}
