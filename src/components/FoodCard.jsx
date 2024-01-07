import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import NoImage from "../assets/images/no-image.webp";

const FoodCard = ({ id, number, title, image, error, handleDetailRecipe }) => {
  return (
    <Link to={error ? "/" : `/recipe?${id}&${title}`} onClick={handleDetailRecipe}>
      <div className="px-2 pt-2 bg-white shadow-lg w-full hover:scale-105 focus:scale-105 duration-300 delay-150 cursor-pointer">
        <img
          src={error ? NoImage : image}
          alt={error ? "No Title" : title}
          className="h-56 md:h-48 w-full md:w-80 object-cover"
        />
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="font-semibold">{number < 10 ? `0${number}` : number}</div>
            <div className="px-2 text-orange-400 text-4xl">
              <FiMinus />
            </div>
            <div className="font-semibold text-left truncate w-48">
              {error ? "No Title" : title}
            </div>
          </div>
          <div className="border border-green-600 rounded-full p-3 text-green-600 hover:text-white hover:bg-green-600 transition-colors cursor-pointer">
            <FaRegBookmark />
          </div>
        </div>
      </div>
    </Link>
  );
};

FoodCard.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handleDetailRecipe: PropTypes.func.isRequired
};

export default FoodCard;
