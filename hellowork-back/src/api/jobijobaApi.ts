import fetch from 'node-fetch';
import {join} from 'path';

import {LoginResponse, SearchParams, SearchResponse} from '../types/jobijoba.types.ts';

export const adsSearch = async (token: string, searchParams: SearchParams) => {
  const urlParams = new URLSearchParams();
  urlParams.append('what', searchParams?.what as string);
  urlParams.append('where', searchParams?.where as string);
  if (typeof searchParams?.page !== typeof undefined) {
    urlParams.append('page', `${searchParams?.page}`);
  }
  if (typeof searchParams?.limit !== typeof undefined) {
    urlParams.append('limit', `${searchParams?.limit}`);
  }

  const url = join(process.env.JOBIJOBA_API_URL as string, process.env.JOBIJOBA_API_VERSION as string, process.env.JOBIJOBA_API_COUNTRY_CODE as string, 'ads', 'search');

  const response = await fetch(`${url}?${urlParams.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return (await response?.json()) as SearchResponse;
};

export const login = async () => {
  const url = join(process.env.JOBIJOBA_API_URL as string, process.env.JOBIJOBA_API_VERSION as string, process.env.JOBIJOBA_API_COUNTRY_CODE as string, 'login');
  const body = JSON.stringify({client_id: process.env.JOBIJOBA_API_CLIENT_ID, client_secret: process.env.JOBIJOBA_API_CLIENT_SECRET});

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });

  return (await response?.json()) as LoginResponse;
};
