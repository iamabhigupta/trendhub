import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Props {
  value: number;
  text?: string;
  color?: string;
}

import { IconContext } from 'react-icons';

const Rating = ({ value, text, color = '#ffd30f' }: Props) => {
  return (
    <IconContext.Provider value={{ color: color }}>
      <div className="flex items-center gap-[2px]">
        <span>
          {value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <p className="text-xs font-semibold text-gray-700 ml-3">
          {text && text}
        </p>
      </div>
    </IconContext.Provider>
  );
};

// Rating.defaultProps = {
//   color: '#f8e825',
// };

export default Rating;
