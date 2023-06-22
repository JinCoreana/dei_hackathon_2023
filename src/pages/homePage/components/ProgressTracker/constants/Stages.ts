import { Stages } from "../ProgressTracker.types";

export const STAGES: Stages[] = [
  {
    order: 0,
    title: "Application",
    description:
      "We’ve received your application.\nWe’ll let you know if we need anything else.",
  },
  {
    order: 1,
    title: "Stage 1",
    description:
      "Your application is with us, and we’re waiting for you to send us some documents.",
    linkText: "View and upload documents here.",
    href: "/",
  },
  {
    order: 2,
    title: "Stage 2",
    description:
      "We’re looking through your documents now to get to know you a bit better.\nIf we think you’re a good fit, we’ll be in touch with your next steps soon.",
  },
  {
    order: 3,
    title: "Stage 3",
    description:
      "Congratulations! You’ve been shortlisted.\nWe’ll invite you to an interview soon.\nIn the meantime, go to the quick links below to help you prepare,\nor request an adjustment if you need one.",
  },
  {
    order: 4,
    title: "Hiring Stage",
    description:
      "Congratulations! Your interview was successful.\nWe’re processing your contract of employment, and we’ll be in touch soon.",
  },
];
