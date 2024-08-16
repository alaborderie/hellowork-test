import {FC} from 'react';
import {Job} from '../../types/api.types';

interface Props {
  job: Job;
}

const JobItem: FC<Props> = ({job}) => (
  <a href={job.link} target="_blank" className="p-4 text-black no-underline bg-white rounded shadow-md flex flex-col hover:scale-110 transition-all">
    <p className="text-xl mb-2">
      {job.jobtitle} - {job.company}
    </p>
    <p className="text-xl mb-2">{job.title}</p>
    <p className="text-sm mb-2">{job.description}</p>
    <div className="flex text-sm text-gray-500 justify-between items-center mt-auto">
      <p>{job.city}</p>
      <p>{new Date(job.publicationDate).toLocaleDateString()}</p>
    </div>
  </a>
);

export default JobItem;
