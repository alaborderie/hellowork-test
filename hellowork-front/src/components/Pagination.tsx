import {useState, useEffect} from 'react';
import useJobsStore from '../stores/jobsStore';
import Button from './Button';
import Input from './Input';

const Pagination = () => {
  const {limit, isLoading, total, page, setLimit, setPage} = useJobsStore();
  const [inputLimitValue, setInputLimitValue] = useState(limit);

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputLimitValue(Number(e.target.value) || 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLimit(inputLimitValue);
    }, 500);
    return () => clearTimeout(timeout);
  }, [inputLimitValue]);

  useEffect(() => {
    setInputLimitValue(limit);
  }, [limit]);

  return (
    <div className="w-full max-w-[1440px] flex justify-between items-center my-4">
      <Button isDisabled={isLoading || page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>
      <Input name="limit" type="number" onChange={handleLimitChange} isDisabled={isLoading} label="Job per page" value={inputLimitValue} />
      <Button isDisabled={isLoading || page * limit >= total} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
