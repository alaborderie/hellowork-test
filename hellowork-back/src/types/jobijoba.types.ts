export interface LoginBody {
  client_id: string;
  client_secret: string;
}

export interface LoginResponse {
  code: number;
  message: string;
  token: string;
}

export interface SearchParams {
  what?: string;
  where?: string;
  page?: number;
  limit?: number;
}

export interface JobAd {
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

export interface SearchResponse {
  code: number;
  message: string;
  data: {
    total: number;
    ads: Array<JobAd>;
  };
}
