export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected";

export type Application = {
  jobId: string;
  title: string;
  company: string;
  status: ApplicationStatus;
  appliedAt: string;
};
