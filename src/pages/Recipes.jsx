import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import Header from "../assets/images/header.jpg";
import { FetchRecipe } from "../services/apis/fetchRecipe";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

const Recipes = () => {
  const [isError, setIsError] = useState();
  const [inputValue, setInputValue] = useState();
  const [listRecipe, setListRecipe] = useState([]);

  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search).get("q");
  const query = params !== "undefined" ? params : "";

  useEffect(() => {
    const getListRecipe = async () => {
      const dataRecipe = await FetchRecipe(query);
      if (dataRecipe.status === "success") setListRecipe(dataRecipe?.data?.d);
      else if (dataRecipe.status === "failed") setIsError(true);
    };
    getListRecipe();
  }, [query]);

  const handleInputValue = (e) => {
    setInputValue(e);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/recipes?q=${inputValue}`);
    }
  };

  const handleDetailRecipe = (idRecipe) => {
    localStorage.setItem(
      "Recipe",
      JSON.stringify(listRecipe.find((item) => item.id === idRecipe))
    );
    localStorage.setItem("Recipes", JSON.stringify(listRecipe));
  };

  return (
    <div>
      <div>
        <img
          src={Header}
          alt="Find"
          className="absolute h-72 md:h-96 w-full object-cover"
        />
        <div className="absolute h-96 items-center w-full flex">
          <div className="mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto bg-white">
              <span className="text-orange-400">Find</span> Your Perfect Dish
            </h1>
            <div className="flex w-full mx-auto md:mx-0 mt-5 md:mt-10 pl-4 p-1 rounded-full bg-white">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Search for Delicious Recipes..."
                onChange={(e) => handleInputValue(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
                defaultValue={query}
              />
              <Link to={`/recipes?q=${inputValue}`}>
                <button>
                  <FaSearch />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-72 md:pt-96">
        <div className={classNames({ "px-4 md:px-40 py-10": true, "h-screen": !query })}>
          <h1 className="text-2xl md:text-3xl font-bold md:py-4 text-left">
            {query
              ? "Result of " + "❛" + query + "❜"
              : "Input key on search box..."}
          </h1>
          <div className="border-b-2 border-orange-400 w-20"></div>
          <div className="py-5 md:py-10 flex flex-wrap">
            {listRecipe &&
              listRecipe.map((recipe, index) => (
                <div
                  key={recipe?.id}
                  className="w-full md:w-1/4 md:p-2 md:py-0 py-2"
                >
                  <FoodCard
                    id={recipe?.id}
                    number={index + 1}
                    title={recipe?.Title}
                    image={recipe?.Image}
                    error={isError}
                    handleDetailRecipe={() => handleDetailRecipe(recipe?.id)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
