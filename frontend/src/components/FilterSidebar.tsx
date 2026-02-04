import type { Filters } from "../types/filters";

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

export default function FilterSidebar({ filters, onChange }: Props) {
  return (
    <div
      style={{
        width: "250px",
        padding: "16px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h3>Filters</h3>

      <input
        type="text"
        placeholder="Role (e.g. React)"
        value={filters.role}
        onChange={(e) => onChange({ ...filters, role: e.target.value })}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => onChange({ ...filters, location: e.target.value })}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <select
        value={filters.jobType}
        onChange={(e) => onChange({ ...filters, jobType: e.target.value })}
        style={{ width: "100%" }}
      >
        <option value="">All Job Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
}
