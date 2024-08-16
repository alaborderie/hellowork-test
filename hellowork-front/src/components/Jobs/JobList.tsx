import useJobsStore from '../../stores/jobsStore';
import JobItem from './JobItem';

const JobList = () => {
  const {isLoading, jobs} = useJobsStore();

  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-[1440px]">
      {isLoading ? <p>Loading ...</p> : jobs?.map(job => <JobItem key={job.id} job={job} />)}
    </div>
  );
};

export default JobList;
