import { Job } from "../types/job";

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      <h3>{job.title}</h3>
      <p>
        <strong>{job.company}</strong> · {job.location}
      </p>
      <p>{job.description}</p>

      <div style={{ fontSize: "14px", color: "#555" }}>
        {job.jobType} · {job.workMode}
      </div>

      <button style={{ marginTop: "10px" }}>Apply</button>
    </div>
  );
}
