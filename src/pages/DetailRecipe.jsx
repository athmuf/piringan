import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";

const DetailRecipe = () => {
  const [idRecipe, title] = useLocation().search.substring(1).split("&");
  const storedRecipe = JSON.parse(localStorage.getItem("Recipe")) || {};
  const { id, Title, Instructions, Ingredients, Image } = storedRecipe;

  return (
    <div className="pt-28 px-4 md:px-40">
      <div className="flex space-x-8">
        <div className="w-1/3 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 py-10">
            {Title}
          </h1>
          <div className="border-b border-gray-500 mb-5">
            <h5 className="text-2xl text-gray-500">Ingredients</h5>
          </div>
          <ul className="list-disc">
            {Ingredients &&
              Object.values(Ingredients).map((ingredient, index) => (
                <li key={index} className="flex items-center py-1">
                  <div className="w-1/12 pr-3">
                    <FaCircleNotch />
                  </div>
                  <div className="w-11/12">{ingredient}</div>
                </li>
              ))}
          </ul>
        </div>
        <div className="w-1/3 bg-white text-justify">
          <div className="border-b border-gray-500 mb-5">
            <h5 className="text-2xl text-gray-500">Instructions</h5>
          </div>
          <div className="whitespace-pre-line space-y-4">
            {" "}
            {Instructions.split("\n").map((paragraph, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1/6 text-center">{index + 1}</div>
                <div className="w-5/6">{paragraph}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 bg-gray-800 h-screen flex items-center justify-center">
          <img src={Image} alt={Title} className="p-2 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
