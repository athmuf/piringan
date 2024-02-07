import { useLocation } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { FetchRecipe } from "../services/apis/fetchRecipe";

const DetailRecipe = () => {
  const [listRecipe, setListRecipe] = useState([]);
  const [isError, setIsError] = useState(false)
  const [isIngredients, setIsIngredients] = useState(true);
  const [idRecipe, title] = useLocation().search.substring(1).split("&");
  const storedRecipe = JSON.parse(localStorage.getItem("Recipe")) || {};
  const { id, Title, Instructions, Ingredients, Image } = storedRecipe;

  useEffect(() => {
    window.scrollTo(0, 0);
    setListRecipe(JSON.parse(localStorage.getItem("Recipes")));
  }, []);

  // console.log(storedRecipe, "storedrecipe")
  // console.log(Title)
  // useEffect(() => {
  //   if (localStorage.getItem("Recipe") === null) {
  //     const getListRecipe = async () => {
  //       const dataRecipe = await FetchRecipe(title);
  //       console.log(dataRecipe?.data?.d?.[0])
  //       if (dataRecipe.status === "success") localStorage.setItem("Recipe", JSON.stringify(dataRecipe?.data?.d?.[0]));
  //       else if (dataRecipe.status === "failed") setIsError(true);
  //     };
  //     getListRecipe();
  //   }
  // }, [title])

  return (
    <div className="pt-28 px-4 md:px-40">
      <div className="flex md:flex-row flex-col md:space-x-8 space-x-0 md:py-10 py-0">
        <div className="md:w-2/3 w-full flex bg-white flex-col">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full md:pb-0 pb-5">
              <img
                src={Image}
                alt={Title}
                className="w-full rounded shadow-xl"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col">
              <h1 className="text-3xl md:text-4xl md:py-4 font-bold text-gray-900 md:px-10">
                {Title}
              </h1>
              <div className="border-b-2 border-orange-400 w-20 md:ml-10 ml-0"></div>
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
          <div className="md:mx-20 overscroll-auto overflow-auto h-96 bg-white shadow-xl p-8 space-y-4 border">
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
        <div className="md:w-1/3 w-full overscroll-auto overflow-auto md:h-screen bg-gray-100 shadow-xl p-8 space-y-4 border md:my-0 my-10">
          <h4 className="text-lg font-semibold">Related Recipes</h4>
          <div className="md:space-y-2 space-y-0 space-x-2 md:space-x-0 flex md:flex-col flex-row">
            {listRecipe.map((recipes) => (
              <div key={recipes.id}className="flex md:flex-row flex-col border rounded shadow-md items-center bg-white cursor-pointer transition ease-in-out hover:scale-110 duration-300">
                <img
                  src={recipes.Image}
                  alt={recipes.Title}
                  className="md:w-5/12 w-full md:h-full h-56 object-cover"
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
