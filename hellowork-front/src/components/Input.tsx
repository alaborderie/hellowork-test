import {FC} from 'react';

interface Props {
  name: string;
  type?: string;
  id?: string;
  value?: string | number | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeHolder?: string;
  label?: string;
  isDisabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({name, type = 'text', id = null, value, onChange, className = '', placeHolder = '', label = null, isDisabled = false, onKeyDown = () => null}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        className={`peer w-full bg-gray-50 border-b p-2 placeholder:text-transparent focus:outline-none ${isDisabled ? 'opacity-30' : ''}`}
        placeholder={placeHolder || name}
        disabled={isDisabled}
        onKeyDown={onKeyDown}
      />
      <label
        htmlFor={name}
        className={`cursor-text absolute left-0 ml-1 -translate-y-4 px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base text-gray-400 peer-focus:ml-1 peer-focus:-translate-y-4 peer-focus:px-1 peer-focus:text-sm ${isDisabled ? 'opacity-30' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
