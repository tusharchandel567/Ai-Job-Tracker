import { useState } from "react";
import JobFeed from "./components/JobFeed";
import FilterSidebar from "./components/FilterSidebar";
import { Filters } from "./types/filters";

function App() {
  const [filters, setFilters] = useState<Filters>({
    role: "",
    location: "",
    jobType: "",
  });

  return (
    <div style={{ display: "flex" }}>
      <FilterSidebar filters={filters} onChange={setFilters} />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>AI Job Tracker</h1>
        <JobFeed filters={filters} />
      </div>
    </div>
  );
}

export default App;
