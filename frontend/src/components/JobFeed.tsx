import JobCard from "./JobCard";
import { jobs } from "../data/jobs";
import { Filters } from "../types/filters";

type Props = {
  filters: Filters;
};

export default function JobFeed({ filters }: Props) {
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
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
