import {login, adsSearch} from '../api/jobijobaApi';
import {SearchParams} from '../types/jobijoba.types';
import {mapJobs} from '../helpers/jobsMapper';

export const getJobs = async (params: SearchParams) => {
  const {token} = await login();
  const searchResponse = await adsSearch(token, {where: params.where, what: params.what, page: params.page, limit: params.limit});
  console.log(searchResponse);
  return mapJobs(searchResponse);
};
