import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-4 md:py-8 px-4 md:px-40 mt-10">
      <div className="flex justify-center text-white space-x-3 text-center md:text-base text-sm items-center">
        <div>©2024 PIRINGAN. All Right Reserved</div>
        <div className="flex items-center">
          |<FaGithub className="text-2xl mx-2"></FaGithub>{" "}
          <a href="https://github.com/athmuf" target="_blank" rel="noreferrer">
            <span className="underline cursor-pointer">athmuf</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
