import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import Header from "../assets/images/header.jpg";
import { FetchRecipe } from "../services/apis/fetchRecipe";

const Recipes = () => {
  const [inputValue, setInputValue] = useState("");
  const [listRecipe, setListRecipe] = useState([]);
  const [isError, setIsError] = useState()

  useEffect(() => {
    const getListRecipe = async () => {
      const dataRecipe = await FetchRecipe(inputValue);
      if (dataRecipe.status === "success") setListRecipe(dataRecipe?.data?.d);
      else if (dataRecipe.status === "failed") setIsError(true);
    };
    getListRecipe();
  }, [inputValue]);

  console.log(listRecipe);

  useEffect(() => {
    window.scrollTo(0, 0);
    const recipeItem = localStorage.getItem("Find");
    if (recipeItem === "undefined") setInputValue("");
    if (recipeItem !== "undefined") setInputValue(recipeItem);
  }, []);

  const handleInputValue = () => {};
  const handleKeyPress = () => {};
  return (
    <div>
      <div>
        <img
          src={Header}
          alt="Find"
          className="absolute h-80 md:h-96 w-full object-cover"
        />
        <div className="absolute h-96 items-center w-full flex">
          <div className="mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto bg-white">
              <span className="text-orange-400">Find</span> Your Perfect Dish
            </h1>
            <div className="flex w-full mx-auto md:mx-0 mt-10 pl-4 p-1 rounded-full bg-white">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Search for Delicious Recipes..."
                onChange={(e) => handleInputValue(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
                defaultValue={inputValue}
              />
              <button>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-80 md:pt-96">
        <div className="px-4 md:px-40 py-10">
          <h1 className="text-2xl md:text-3xl font-bold md:py-4 text-left">
            {inputValue
              ? "Result of " + "❛" + inputValue + "❜"
              : "Popular Dish"}
          </h1>
          <div className="border-b-2 border-orange-400 w-20"></div>
          <div className="py-5 md:py-10">
            <FoodCard error={isError}/>
            {/* {listRecipe &&
              listRecipe.map((recipe) => (
                <div key={recipe?.id}>
                  <FoodCard />
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
