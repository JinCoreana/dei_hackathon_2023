export type AdjustRequestPost = {
  title: string;
  date: string;
  status: string;
  radio: string | null;
  dropdown: string | null;
  textbox: string | null;
};

export type AdjustRequestOption = {
  title:
    | "additional time"
    | "written instructions"
    | "quiet or private space"
    | "visual aid"
    | "communication adjustment"
    | "other adjustment";
  intro: {
    title: string;
    subtitle: string;
  } | null;
  radio: {
    title: string;
    subtitle?: string;
    content: selectOption[];
  } | null;
  dropdown: {
    title: string;
    subtitle?: string;
    content: selectOption[];
  } | null;
  textbox: {
    title: string;
    subtitle: string;
  } | null;
};

type selectOption = {
  order: number;
  option: string;
  description?: string;
};
