import { useLocation } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";
import { useEffect, useState } from "react";
import classNames from "classnames";

const DetailRecipe = () => {
  const [listRecipe, setListRecipe] = useState([]);
  const [isIngredients, setIsIngredients] = useState(true);
  const [idRecipe, title] = useLocation().search.substring(1).split("&");
  const storedRecipe = JSON.parse(localStorage.getItem("Recipe")) || {};
  const { id, Title, Instructions, Ingredients, Image } = storedRecipe;

  useEffect(() => {
    window.scrollTo(0, 0);
    setListRecipe(JSON.parse(localStorage.getItem("Recipes")));
  }, []);

  console.log(listRecipe)

  return (
    <div className="pt-28 px-4 md:px-40">
      <div className="flex space-x-8 py-10">
        <div className="w-2/3 flex bg-white flex-col">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src={Image}
                alt={Title}
                className="w-full rounded shadow-xl"
              />
            </div>
            <div className="w-1/2 flex flex-col">
              <h1 className="text-3xl md:text-4xl md:py-4 font-bold text-gray-900 px-10">
                {Title}
              </h1>
              <div className="border-b-2 border-orange-400 w-20 ml-10"></div>
            </div>
          </div>
          <div className="flex justify-center py-10 space-x-5">
            <button
              onClick={() => setIsIngredients(true)}
              className={classNames({
                "bg-green-600": isIngredients,
                "bg-white text-gray-900 border-gray-300": !isIngredients,
              })}
            >
              Ingredients
            </button>
            <button
              onClick={() => setIsIngredients(false)}
              className={classNames({
                "bg-green-600": !isIngredients,
                "bg-white text-gray-900 border-gray-300": isIngredients,
              })}
            >
              Directions
            </button>
          </div>
          <div className="mx-20 overscroll-auto overflow-auto h-96 bg-white shadow-xl p-8 space-y-4 border">
            <ul>
              {isIngredients ? (
                Ingredients &&
                Object.values(Ingredients).map((ingredient, index) => (
                  <li key={index} className="flex items-center py-1">
                    <div className="w-1/12">
                      <FaCircleNotch className="text-orange-400" />
                    </div>
                    <div className="w-11/12">{ingredient}</div>
                  </li>
                ))
              ) : (
                <div className="whitespace-pre-line space-y-4">
                  {" "}
                  {Instructions.split("\n").map((paragraph, index) => (
                    <li key={index} className="flex items-center py-1">
                      <div className="w-1/12 text-center text-orange-400 font-bold">
                        {index + 1}.
                      </div>
                      <div className="w-11/12">{paragraph}</div>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className="w-1/3 pl-10 overscroll-auto overflow-auto h-screen bg-gray-100 shadow-xl p-8 space-y-4 border">
          <h4 className="text-lg font-semibold">Related Recipes</h4>
          <div className="space-y-2">
            {listRecipe.map((recipes) => (
              <div key={recipes.id}className="flex border rounded shadow-md items-center bg-white">
                <img
                  src={recipes.Image}
                  alt={recipes.Title}
                  className="w-3/12 h-full object-cover"
                />
                <h5 className="text-base px-4">{recipes.Title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
