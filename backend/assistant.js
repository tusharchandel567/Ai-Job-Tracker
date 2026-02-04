import { StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const graph = new StateGraph({
  messages: [],
});

/* Intent detection */
graph.addNode("detect_intent", async (state) => {
  const response = await llm.invoke([
    {
      role: "system",
      content: `
You are an AI assistant for a job search app.
Classify user intent as one of:
- filter
- search
- help

Return ONLY one word.
`,
    },
    ...state.messages,
  ]);

  return { intent: response.content.trim() };
});

/* Route */
graph.addConditionalEdges(
  "detect_intent",
  (state) => state.intent,
  {
    filter: "handle_filter",
    search: "handle_filter",
    help: "handle_help",
  }
);

/* Filter handler */
graph.addNode("handle_filter", async (state) => {
  const response = await llm.invoke([
    {
      role: "system",
      content: `
Extract filter updates from user query.
Return JSON like:
{
  "role": "",
  "location": "",
  "jobType": "",
  "workMode": "",
  "matchScore": "",
  "clear": false
}
`,
    },
    ...state.messages,
  ]);

  return {
    action: "update_filters",
    payload: JSON.parse(response.content),
  };
});

/* Help handler */
graph.addNode("handle_help", async () => {
  return {
    action: "help",
    message:
      "You can see applications in the Applications section below the job list.",
  };
});

graph.setEntryPoint("detect_intent");

export const assistant = graph.compile();
