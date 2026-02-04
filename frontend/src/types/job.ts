export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship";
  workMode: "Remote" | "Hybrid" | "On-site";
  postedDate: string;

  // AI match (placeholder for now)
  matchScore?: number;
};
