import {ParameterizedContext} from 'koa';

import {login, adsSearch} from '../api/jobijobaApi';
import {SearchParams} from '../types/jobijoba.types';
import {mapJobs} from '../helpers/jobsMapper';
import jobijobaTokenCache from '../cache/jobijobaTokenCache';

export const getJobs = async (ctx: ParameterizedContext) => {
  const params: SearchParams = ctx.request.query;

  if (typeof params.where === typeof undefined || typeof params.what === typeof undefined) {
    return (ctx.status = 400);
  }

  let jobijobaToken;

  const cachedToken = jobijobaTokenCache.get<string>('token');

  if (cachedToken) {
    jobijobaToken = cachedToken;
  } else {
    const {token} = await login();
    jobijobaToken = token;
    jobijobaTokenCache.set('token', token);
  }

  const searchResponse = await adsSearch(jobijobaToken, {where: params.where, what: params.what, page: params.page, limit: params.limit});

  const mappedJobs = mapJobs(searchResponse);

  return (ctx.body = mappedJobs);
};
