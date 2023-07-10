export type ApplicantData = {
  applicant: {
    first_name: string;
    last_name: string;
    email: string;
    referral: string;
    phone_number: string;
    source: string;
    address: string;
  };
  vacancies: Vacancy[];
  send_thank_you_email: string;
};

export type Vacancy = {
  job_title: string;
  status: string;
  attachment: string;
  summary: string;
};

export type Stages = {
  order: number;
  title: string;
  description: string;
  linkText?: string;
  href?: string;
};
