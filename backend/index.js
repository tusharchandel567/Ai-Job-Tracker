import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import { matchJob } from "./match.js";

dotenv.config();

const app = Fastify({
  logger: true,
});

/* Enable CORS (MANDATORY for frontend calls) */
await app.register(cors, {
  origin: true,
});

/* Health check */
app.get("/", async () => {
  return { status: "Backend running 🚀" };
});

/* AI job matching */
app.post("/match", async (req, res) => {
  const { resumeText, jobs } = req.body;

  if (!resumeText || !jobs) {
    return res.code(400).send({ error: "Missing resumeText or jobs" });
  }

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

/* Start server */
app.listen({ port: 3001, host: "0.0.0.0" }, () => {
  console.log("✅ Backend running on http://localhost:3001");
});
