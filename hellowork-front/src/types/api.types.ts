export interface GetJobsParams {
  what?: string;
  where?: string;
  page?: number;
  limit?: number;
}

export interface Job {
  id: string;
  link: string;
  title: string;
  description: string;
  publicationDate: string;
  coordinates: string;
  city: string;
  postalCode: string;
  department: string;
  region: string;
  sector: string;
  jobtitle: string;
  company: string;
  contractType: Array<string>;
  salary: string;
}

export interface GetJobsResponse {
  total: number;
  jobs: Array<Job>;
}
