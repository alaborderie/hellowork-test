import {useState, useEffect} from 'react';

import Button from './components/Button';
import Input from './components/Input';
import useJobsStore from './stores/jobsStore';
import JobList from './components/Jobs/JobList';
import Pagination from './components/Pagination';

function App() {
  const [jobSearch, setJobSearch] = useState<string>('');
  const {isLoading, getJobs, jobs, page, limit} = useJobsStore();

  const handleSearch = () => getJobs(jobSearch);

  useEffect(() => {
    getJobs(jobSearch);
  }, [page, limit]);

  return (
    <div className="bg-gray-50 h-full min-h-screen w-screen p-32 flex flex-col items-center">
      <h1 className="text-5xl mb-16">Hello work!</h1>
      <div className="flex justify-between items-center gap-8 mb-8">
        <h2>A job is waiting for you! Whate are you looking for?</h2>
        <Input className="mr-6" name="jobTitle" onChange={e => setJobSearch(e.target.value)} isDisabled={isLoading} label="Job Title" value={jobSearch} />
        <Button isDisabled={isLoading} onClick={handleSearch}>
          Search
        </Button>
      </div>
      <Pagination />
      <JobList />
      {jobs?.length > 0 && <Pagination />}
    </div>
  );
}

export default App;
