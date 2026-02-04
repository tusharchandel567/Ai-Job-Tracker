export const updateFiltersTool = {
  name: "update_filters",
  description: "Update frontend job filters",
  parameters: {
    type: "object",
    properties: {
      role: { type: "string" },
      location: { type: "string" },
      jobType: { type: "string" },
      workMode: { type: "string" },
      matchScore: { type: "string" },
      clear: { type: "boolean" },
    },
  },
};
