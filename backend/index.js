import Fastify from "fastify";
import dotenv from "dotenv";
import { matchJob } from "./match.js";

dotenv.config();
const app = Fastify();

app.post("/match", async (req, res) => {
  const { resumeText, jobs } = req.body;

  const results = await Promise.all(
    jobs.map(async (job) => {
      const ai = await matchJob(resumeText, job.description);
      return {
        ...job,
        matchScore: ai.score,
        explanation: ai.reason,
      };
    })
  );

  return results;
});

app.listen({ port: 3001 }, () => {
  console.log("Backend running on http://localhost:3001");
});
