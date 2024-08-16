import {FC} from 'react';
import {Job} from '../../types/api.types';

interface Props {
  job: Job;
}

const JobItem: FC<Props> = ({job}) => (
  <a href={job.link} className="p-4 text-black no-underline bg-white rounded shadow-md flex flex-col">
    <p className="text-xl mb-2">
      {job.jobtitle} - {job.company}
    </p>
    <p className="text-xl mb-2">{job.title}</p>
    <p className="text-sm">{job.description}</p>
  </a>
);

export default JobItem;
