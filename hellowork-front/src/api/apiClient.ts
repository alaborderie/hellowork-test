import {GetJobsParams, GetJobsResponse} from '../types/api.types';

export const apiGetJobs = async (searchParams: GetJobsParams) => {
  const urlParams = new URLSearchParams();
  urlParams.append('what', searchParams?.what as string);
  urlParams.append('where', searchParams?.where as string);
  if (typeof searchParams?.page !== typeof undefined) {
    urlParams.append('page', `${searchParams?.page}`);
  }
  if (typeof searchParams?.limit !== typeof undefined) {
    urlParams.append('limit', `${searchParams?.limit}`);
  }
  const response = await fetch(`${import.meta.env.MODE === 'development' ? 'http://localhost:3000/api/getJobs' : '/api/getJobs'}?` + urlParams);
  return (await response?.json()) as GetJobsResponse;
};
