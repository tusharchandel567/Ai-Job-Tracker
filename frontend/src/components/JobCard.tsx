import { Job } from "../types/job";

type Props = {
  job: Job;
  onApply: (job: Job) => void;
};

export default function JobCard({ job, onApply }: Props) {
  const score = job.matchScore ?? 0;

  // Decide badge color based on score
  let badgeColor = "#9ca3af"; // gray
  if (score > 70) badgeColor = "#16a34a"; // green
  else if (score >= 40) badgeColor = "#f59e0b"; // yellow

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px",
        backgroundColor: "#fff",
      }}
    >
      {/* Title + Match Score */}
      <h3
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {job.title}
        <span
          style={{
            backgroundColor: badgeColor,
            color: "white",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {score}%
        </span>
      </h3>

      {/* Company & Location */}
      <p>
        <strong>{job.company}</strong> · {job.location}
      </p>

      {/* Description */}
      <p>{job.description}</p>

      {/* Meta info */}
      <div style={{ fontSize: "14px", color: "#555" }}>
        {job.jobType} · {job.workMode}
      </div>

      {/* Apply button */}
      <button
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          cursor: "pointer",
        }}
        onClick={() => {
          // Open external job link (placeholder for now)
          window.open("https://example.com", "_blank");

          // Notify parent that user clicked Apply
          onApply(job);
        }}
      >
        Apply
      </button>
    </div>
  );
}
