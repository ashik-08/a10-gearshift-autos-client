import view from "../../assets/icons/view.svg";
import update from "../../assets/icons/update.svg";
import remove from "../../assets/icons/delete.svg";
import { Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const ShowCars = () => {
  const allCars = useLoaderData();
//   console.log(allCars);
  let count = 0;

  return (
    <section>
      {/* <h1 className="text-white text-center text-3xl md:text-4xl font-indie font-medium mt-20 md:mt-32 -mb-12">
        Available Automobile
      </h1> */}
      {allCars.length === 0 ? (
        <div className="container mx-auto glass-newsletter text-center mt-20 md:mt-32 px-2 md:px-16 py-12 lg:py-28">
          <h1 className="text-blue-gray-200 text-3xl md:text-4xl lg:text-5xl font-indie font-semibold">
            Brand hasn&apos;t been added to our store yet.
          </h1>
          <p className="text-gray-300 md:text-lg xl:text-xl font-medium mt-12">
            We are really sorry for the inconvenience. <br />
            Subscribe to our newsletter to know more and <br />
            get updated when new products arrive in our store.
          </p>
        </div>
      ) : (
        allCars?.map((car) => (
          <div key={car._id}>
            <section className="bg-coffee-bg bg-cover">
              {count === 0 ? (
                <>
                  <h1 className="text-white text-center text-3xl md:text-4xl font-indie font-medium mt-20 md:mt-32 -mb-12">
                    Available Automobile
                  </h1>
                  <p className="hidden">{count++}</p>
                </>
              ) : (
                ""
              )}
              <div className="container mx-auto">
                <div className="glass-newsletter text-menu text-base md:text-lg font-semibold px-2 md:px-12 py-12 lg:py-20 mt-20 md:mt-32 rounded-md flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-x-5 gap-y-16 drop-shadow-lg">
                  <figure className="max-w-prose">
                    <img
                      className="w-full rounded-lg"
                      src={car.image}
                      alt={`${car.name}-image`}
                    />
                  </figure>
                  <div className="space-y-3">
                    <h2 className="text-blue-gray-200 font-annie text-3xl mb-8">
                      Information
                    </h2>
                    <p>
                      Name:{" "}
                      <span className="text-gray-300 font-normal">
                        {car.name}
                      </span>
                    </p>
                    <p>
                      Brand Name:{" "}
                      <span className="text-gray-300 font-normal">
                        {car.brandName}
                      </span>
                    </p>
                    <p>
                      Type:{" "}
                      <span className="text-gray-300 font-normal">
                        {car.type}
                      </span>
                    </p>
                    <p>
                      Price:{" "}
                      <span className="text-gray-300 font-normal">
                        {car.price}
                      </span>
                    </p>
                    <p>
                      Rating:{" "}
                      <span className="text-gray-300 font-normal">
                        {car.rating}
                      </span>
                    </p>
                    <Rating
                      unratedColor="amber"
                      ratedColor="amber"
                      value={parseInt(car.rating)}
                      readonly
                    />
                    {/* icons */}
                    <div className="flex gap-5 pt-4">
                      {/* <figure className="bg-[#D2B48C] md:w-10 rounded"> */}
                      <figure className="glass-products md:w-14 md:h-14">
                        {/* <Link to={`/viewCoffee/${car._id}`}> */}
                        <img className="p-4" src={view} alt="" />
                        {/* </Link> */}
                      </figure>
                      {/* <figure className="bg-[#3C393B] md:w-10 rounded"> */}
                      <figure className="glass-products md:w-14 md:h-14">
                        {/* <Link to={`/updateCoffee/${car._id}`}> */}
                        <img className="p-4" src={update} alt="" />
                        {/* </Link> */}
                      </figure>
                      {/* <figure className="bg-[#EA4744] md:w-10 rounded"> */}
                      <figure className="glass-products md:w-14 md:h-14">
                        <img
                          // onClick={() => handleDelete(car._id)}
                          className="p-4"
                          src={remove}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))
      )}
    </section>
  );
};

export default ShowCars;
