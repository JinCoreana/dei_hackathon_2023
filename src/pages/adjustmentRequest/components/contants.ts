import {
  AdjustRequestOption,
  AdjustRequestPost,
} from "../AdjustmentRequest.types";

export const ADJUSTMENT_REQUEST_INITIAL_DATA: AdjustRequestPost = {
  title: "",
  radio: "",
  dropdown: "",
  textbox: "",
  date: "",
  status: "In review",
};

export const ADJUSTMENT_REQUEST_OPTIONS: AdjustRequestOption[] = [
  {
    title: "additional time",
    intro: null,
    radio: {
      title: "Select an additional time adjustment below",
      subtitle: "Let us know what might help you at any stage of the process.",
      content: [
        { order: 1, option: "More time to answer questions" },
        { order: 2, option: "More time to complete tasks" },
        { order: 3, option: "Regular breaks" },
      ],
    },
    textbox: {
      title: "Detail(optional)",
      subtitle:
        "If you’re happy to do so, tell us how this adjustment will benefit you. This will help us review your request.",
    },
    dropdown: {
      title: "Select how much extra time you would like",
      subtitle:
        "This is an estimation of the total extra time you might need in minutes.",
      content: [
        { order: 1, option: "15 minutes" },
        { order: 2, option: "30 minutes" },
        { order: 3, option: "45 minutes" },
        { order: 4, option: "60 minutes" },
      ],
    },
  },
  {
    title: "written instructions",
    intro: {
      title:
        "Let us know if you would like written instructions to help you understand your interview better.",
      subtitle:
        "For example, written instructions for a practical task, or receiving questions ahead of interview.",
    },
    radio: {
      title:
        "Select the box below if you would benefit from written instructions at interview.",
      content: [{ order: 1, option: "I would like written instructions" }],
    },
    textbox: {
      title: "Detail(optional)",
      subtitle:
        "Let us know what kind of written instructions would benefit you. If you have any requirements for these instructions, e.g. you need text to be a certain size, let us know in the following box.",
    },
    dropdown: null,
  },
  {
    title: "quiet or private space",
    intro: null,
    radio: {
      title: "Let us know if you would benefit from a quiet or private space.",
      subtitle: "Select the type of space you need.",
      content: [
        {
          order: 1,
          option: "I need a quiet or private space for an in-person interview",
        },
        { order: 2, option: "I need somewhere to do an online interview" },
      ],
    },
    textbox: {
      title: "Detail(optional)",
      subtitle:
        "Let us know what would make you comfortable. For example, a private room away from external noise.",
    },
    dropdown: null,
  },
  {
    title: "visual aid",
    intro: null,
    radio: {
      title:
        "If you need visual aids to help you in interview, select one or more below.",
      subtitle:
        "If your request is approved, we’ll make these changes to all online and printed materials.",
      content: [
        {
          order: 1,
          option: "Closed captioning in online interview",
        },
        { order: 2, option: "Colour adjustment" },
        { order: 3, option: "Text size adjustment" },
        { order: 4, option: "Other" },
      ],
    },
    textbox: {
      title: "Detail(optional)",
      subtitle:
        "So we can accommodate you better, give us more details as to what would help you.",
    },
    dropdown: null,
  },
  {
    title: "communication adjustment",
    intro: {
      title:
        "As part of the interview process, you’ll have to complete a practical task to assess your skill.",
      subtitle:
        "We know that everybody is different, so if you feel more comfortable demonstrating your skills in a different way, let us know.",
    },
    radio: null,
    textbox: {
      title: "Detail(optional)",
      subtitle:
        "If you’re happy to do so, tell us how this adjustment will benefit you. This will help us review your request.",
    },
    dropdown: {
      title: "Select an adjustment to your interview.",
      content: [
        {
          order: 1,
          option: "Speak slowly and clearly",
          description:
            "Our interviewers will make an effort to speak slowly and clearly. You might find this useful if English is your second language, or if you have difficulty processing information.",
        },
        {
          order: 2,
          option: "Non-verbal language",
          description:
            "Our interviewers will make an effort to use non-verbal language in addition to speech. Body language and gestures might help you understand information better, or make you feel more comfortable.",
        },
        {
          order: 3,
          option: "Simple and concise language",
          description:
            "Our interviewers will use simple and direct language, avoiding jargon and idiomatic language where possible.",
        },
        {
          order: 4,
          option: "Request clarification",
          description:
            "If you’ve requested interview questions in advance, ask us for any clarification you might need before the interview.",
        },
        {
          order: 5,
          option: "Request a bilingual interviewer or interpreter",
          description:
            "We know that English is a second language for many of our colleagues. If you request this, we’ll try to cater for this if possible. Please confirm your language and current location in the following box.",
        },
      ],
    },
  },
  {
    title: "other adjustment",
    intro: null,
    radio: null,
    textbox: {
      title:
        "If there’s another adjustment you need for interview, enter details below.",
      subtitle:
        "The more information you give us, the more we can try to accommodate you.",
    },
    dropdown: null,
  },
];
