import { FaSpinner } from 'react-icons/fa6';

interface Props {
  size: number;
}

const Spinner = ({ size = 40 }: Props) => {
  return (
    <div className="flex justify-center items-center w-full mt-10 animate-spin">
      <FaSpinner size={size} />
    </div>
  );
};

export default Spinner;
