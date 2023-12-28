import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import TastyFood from "../assets/images/tasty-food.jpg";

const Search = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const handleInputValue = (e) => {
    setInputValue(e);
  };

  const handleSearch = () => {
    localStorage.setItem("Find", inputValue);
    navigate("/recipes");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="px-4 md:px-40 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <img
          src={TastyFood}
          alt="Tasty Food Today"
          className="h-96 md:pr-40 pt-8 md:pt-0"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold md:py-4 text-center md:text-left">
            <span className="text-orange-400">Find</span> Your Perfect Dish
          </h1>
          <p className="text-base md:text-lg text-gray-500 py-5 text-center md:text-left">
            Unleash the power of culinary exploration with our advanced search
            feature. Simply enter a specific dish and let our intuitive search
            engine curate a tailored selection of mouthwatering recipes.
          </p>
          <div className="border-b-2 border-green-600 flex w-2/3 md:w-1/2 mx-auto md:mx-0">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Search for Delicious Recipes..."
              onChange={(e) => handleInputValue(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <Link to="/recipes">
              <FaSearch
                className="text-2xl my-2 hover:text-green-700 transition-colors cursor-pointer"
                onClick={handleSearch}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
