import Food from "../assets/images/food.jpg";
import Random from "../assets/images/random.png";
import Find from "../assets/images/find-recipe.png";
import List from "../assets/images/recipe-list.png";

const Hero = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex z-10">
          <div className="md:pl-40 md:p-0 p-4 flex items-center">
            <div className="md:pt-20 pt-16">
              <h1 className="text-4xl md:text-5xl font-bold md:py-4">
                Discover Culinary{" "}
                <span className="text-orange-400">Delights</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 py-5">
                Discover a world of culinary wonders with our diverse recipe
                collection. Elevate your kitchen creations and savor the joy of
                delicious possibilities.
              </p>
              <button className="md:my-5">Explore Recipes Now</button>
              <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 py-10 md:text-center text-left text-gray-600 w-full">
                <div className="bg-gray-100 flex md:flex-col items-center w-full shadow-lg rounded-lg p-4 md:w-28 cursor-pointer md:hover:-translate-y-1 hover:translate-x-1 md:hover:translate-x-0 transition duration-300 justify-center">
                  <img src={Find} alt="Find" className="w-8 md:w-14 mr-2 md:mx-auto" />
                  <div className="pt-0 md:pt-2">Find Recipe</div>
                </div>
                <div className="bg-white flex md:flex-col items-center w-full shadow-lg rounded-lg p-4 md:w-28 cursor-pointer md:hover:-translate-y-1 hover:translate-x-1 md:hover:translate-x-0 transition duration-300 justify-center">
                  <img src={List} alt="Recipes" className="w-8 md:w-14 mr-2 md:mx-auto" />
                  <div className="pt-0 md:pt-2">500+ Recipes</div>
                </div>
                <div className="bg-gray-100 flex md:flex-col items-center w-full shadow-lg rounded-lg p-4 md:w-28 cursor-pointer md:hover:-translate-y-1 hover:translate-x-1 md:hover:translate-x-0 transition duration-300 justify-center">
                  <img src={Random} alt="Random" className="w-8 md:w-14 mr-2 md:mx-auto" />
                  <div className="pt-0 md:pt-2">Surprise Recipe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={Food}
            alt="background-food"
            className="absolute right-0 w-1/2 h-full object-cover clip-path"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
