import { Stages } from "../ProgressTracker.types";

export const STAGES: Stages[] = [
  {
    order: 0,
    title: "Application",
    description: "Thank you, Your application has been acknowledged.",
  },
  {
    order: 1,
    title: "Stage 1",
    description:
      "Awaiting documentation upload (CV/academic records/certificate etc).",
  },
  {
    order: 2,
    title: "Stage 2",
    description:
      "Getting to know you. Our Talent Acquisition Partner will be going over the documentation you shared. If your profile fits, we will reach out with the next steps.",
  },
  {
    order: 3,
    title: "Stage 3",
    description:
      "You have been shortlisted and will be invited to an interview soon, please remember to request any adjustment requests if any are required.",
  },
  {
    order: 4,
    title: "Hiring Stage",
    description:
      "Congratulations, Your Contract of employment is being processed.",
  },
];
