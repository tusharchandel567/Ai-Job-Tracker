import type { Application, ApplicationStatus } from "../types/application";

type Props = {
  applications: Application[];
  onStatusChange: (jobId: string, status: ApplicationStatus) => void;
};

export default function ApplicationsDashboard({
  applications,
  onStatusChange,
}: Props) {
  if (applications.length === 0) {
    return <p>No applications yet.</p>;
  }

  return (
    <div>
      <h2>My Applications</h2>

      {applications.map((app) => (
        <div
          key={app.jobId}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <h4>
            {app.title} @ {app.company}
          </h4>

          <p>
            <strong>Status:</strong>{" "}
            <select
              value={app.status}
              onChange={(e) =>
                onStatusChange(
                  app.jobId,
                  e.target.value as ApplicationStatus
                )
              }
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </p>

          <p style={{ fontSize: "12px", color: "#666" }}>
            Applied on: {new Date(app.appliedAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
