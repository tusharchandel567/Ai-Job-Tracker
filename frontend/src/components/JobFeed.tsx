import JobCard from "./JobCard";
import { jobs } from "../data/jobs";

export default function JobFeed() {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
