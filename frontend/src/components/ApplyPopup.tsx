import { Job } from "../types/job";

type Props = {
  job: Job;
  onConfirm: (status: "Applied" | "Applied Earlier" | "No") => void;
};

export default function ApplyPopup({ job, onConfirm }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "360px",
        }}
      >
        <h3>Confirm Application</h3>

        <p>
          Did you apply to <strong>{job.title}</strong> at{" "}
          <strong>{job.company}</strong>?
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "16px",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => onConfirm("Applied")}>
            Yes, Applied
          </button>

          <button onClick={() => onConfirm("Applied Earlier")}>
            Applied Earlier
          </button>

          <button onClick={() => onConfirm("No")}>
            No, just browsing
          </button>
        </div>
      </div>
    </div>
  );
}
