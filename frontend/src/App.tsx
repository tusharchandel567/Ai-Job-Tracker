import { useState } from "react";
import JobFeed from "./components/JobFeed";
import FilterSidebar from "./components/FilterSidebar";
import { Filters } from "./types/filters";
import { Application } from "./types/application";

function App() {
  const [filters, setFilters] = useState<Filters>({
    role: "",
    location: "",
    jobType: "",
  });

  const [applications, setApplications] = useState<Application[]>([]);
  const [lastAppliedJob, setLastAppliedJob] = useState<any>(null);

  return (
    <div style={{ display: "flex" }}>
      <FilterSidebar filters={filters} onChange={setFilters} />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>AI Job Tracker</h1>

        <JobFeed
          filters={filters}
          onApply={(job) => {
            setLastAppliedJob(job);
          }}
        />
      </div>

      {/* Popup will come next */}
    </div>
  );
}

export default App;
