import { useState } from "react";
import JobFeed from "./components/JobFeed";
import FilterSidebar from "./components/FilterSidebar";
import ApplyPopup from "./components/ApplyPopup";
import ApplicationsDashboard from "./components/ApplicationsDashboard";
import AIAssistant from "./components/AIAssistant";

import type { Filters } from "./types/filters";
import type { Application, ApplicationStatus } from "./types/application";
import type { Job } from "./types/job";

function App() {
  const [filters, setFilters] = useState<Filters>({
    role: "",
    location: "",
    jobType: "",
  });

  const [applications, setApplications] = useState<Application[]>([]);
  const [pendingJob, setPendingJob] = useState<Job | null>(null);

  const handleStatusChange = (
    jobId: string,
    status: ApplicationStatus
  ) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.jobId === jobId ? { ...app, status } : app
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <FilterSidebar filters={filters} onChange={setFilters} />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>AI Job Tracker</h1>

        <JobFeed
          filters={filters}
          onApply={(job) => setPendingJob(job)}
        />

        <hr style={{ margin: "30px 0" }} />

        <ApplicationsDashboard
          applications={applications}
          onStatusChange={handleStatusChange}
        />
      </div>

      <AIAssistant
        onAction={(data) => {
          if (data.action === "update_filters") {
            if (data.payload?.clear) {
              setFilters({ role: "", location: "", jobType: "" });
            } else {
              setFilters((prev) => ({
                ...prev,
                ...data.payload,
              }));
            }
          }
        }}
      />

      {pendingJob && (
        <ApplyPopup
          job={pendingJob}
          onConfirm={(answer) => {
            if (answer !== "No") {
              setApplications((prev) => [
                ...prev,
                {
                  jobId: pendingJob.id,
                  title: pendingJob.title,
                  company: pendingJob.company,
                  status: "Applied",
                  appliedAt: new Date().toISOString(),
                },
              ]);
            }
            setPendingJob(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
