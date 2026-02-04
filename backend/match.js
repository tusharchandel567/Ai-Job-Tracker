import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const prompt = new PromptTemplate({
  template: `
Resume:
{resume}

Job Description:
{job}

Return JSON ONLY:
{{
  "score": number (0-100),
  "reason": "short explanation"
}}
`,
  inputVariables: ["resume", "job"],
});

export async function matchJob(resume, job) {
  const chain = prompt.pipe(llm);
  const result = await chain.invoke({
    resume,
    job,
  });

  return JSON.parse(result.content);
}
