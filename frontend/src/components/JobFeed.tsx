import JobCard from "./JobCard";
import { jobs } from "../data/jobs";
import type { Filters } from "../types/filters";
import type { Job } from "../types/job";

type Props = {
  filters: Filters;
  onApply: (job: Job) => void;
};

export default function JobFeed({ filters, onApply }: Props) {
  const filteredJobs = jobs.filter((job) => {
    const matchRole =
      !filters.role ||
      job.title.toLowerCase().includes(filters.role.toLowerCase());

    const matchLocation =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchJobType =
      !filters.jobType || job.jobType === filters.jobType;

    return matchRole && matchLocation && matchJobType;
  });

  return (
    <div>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  );
}
