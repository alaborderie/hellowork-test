import {create} from 'zustand';
import {Job} from '../types/api.types';
import {apiGetJobs} from '../api/apiClient';

interface JobsState {
  isLoading: boolean;
  total: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  jobs: Array<Job>;
  getJobs: (jobSearch: string) => Promise<void>;
}

const initialState = {
  isLoading: false,
  total: 0,
  limit: 10,
  page: 1,
  jobs: []
};

const useJobsStore = create<JobsState>((set, get) => ({
  ...initialState,
  setLimit: (limit: number) => set({limit, page: 1}),
  setPage: (page: number) => set({page}),
  getJobs: async (jobSearch: string) => {
    set({isLoading: true});
    const {page, limit} = get();
    try {
      const response = await apiGetJobs({what: jobSearch, where: 'Bordeaux', page, limit});
      console.log(response);
      set({total: response.total, jobs: response.jobs, isLoading: false});
    } catch (e) {
      console.error(e);
      set(initialState);
    }
  }
}));

export default useJobsStore;
