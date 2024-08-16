import {SearchResponse} from '../types/jobijoba.types';

export const mapJobs = (ads: SearchResponse) => ({
  total: ads?.data?.total,
  jobs: ads?.data?.ads
});
