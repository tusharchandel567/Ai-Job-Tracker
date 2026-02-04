import { useState } from "react";
import JobFeed from "./components/JobFeed";
import FilterSidebar from "./components/FilterSidebar";
import ApplyPopup from "./components/ApplyPopup";
import { Filters } from "./types/filters";
import { Application } from "./types/application";
import { Job } from "./types/job";

function App() {
  const [filters, setFilters] = useState<Filters>({
    role: "",
    location: "",
    jobType: "",
  });

  const [applications, setApplications] = useState<Application[]>([]);
  const [pendingJob, setPendingJob] = useState<Job | null>(null);

  return (
    <div style={{ display: "flex" }}>
      <FilterSidebar filters={filters} onChange={setFilters} />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>AI Job Tracker</h1>

        <JobFeed
          filters={filters}
          onApply={(job) => {
            setPendingJob(job);
          }}
        />
      </div>

      {/* Popup */}
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
