import {FC, ReactNode} from 'react';

interface Props {
  onClick: () => void;
  children?: string | ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const Button: FC<Props> = ({children = '', onClick, isDisabled = false, className = ''}) => (
  <button onClick={onClick} disabled={isDisabled} className={`rounded-full border-0 px-8 py-2 bg-black text-white flex justify-center items-center ${isDisabled ? 'opacity-30' : ''} ${className}`}>
    {children}
  </button>
);

export default Button;
