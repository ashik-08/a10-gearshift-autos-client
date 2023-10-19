import { Link } from "react-router-dom";
import errorImage from "../../assets/Oops! 404 Error with a broken robot.gif";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <figure className="outline-dashed outline-1 outline-blue-gray-50 drop-shadow-sm">
        <img src={errorImage} alt="errorPage-image" />
      </figure>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-annie mt-12">
          Page Not Found
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="bg-metal text-gray-100 text-lg font-medium px-6 py-2.5 rounded-lg mt-8"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
