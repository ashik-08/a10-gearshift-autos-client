import view from "../../assets/icons/view.svg";
import update from "../../assets/icons/update.svg";
import remove from "../../assets/icons/delete.svg";
import { Rating } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ShowCars = () => {
  const loadedAllCars = useLoaderData();

  const [allCars, setAllCars] = useState(loadedAllCars);

  const { user } = useContext(AuthContext);

  let count = 0;

  const handleDeleteCar = (_id, brandName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // delete car details from the carBrand collection
        try {
          const response = await fetch(
            `https://a10-gearshift-autos-server.vercel.app/brand/${brandName}/${_id}`,
            {
              method: "DELETE",
            }
          );
          const result = await response.json();
          console.log(result);
          if (result.deletedCount > 0) {
            Swal.fire("Deleted!", "Car has been Deleted.", "success");
            const showRemainingCars = allCars.filter(
              (remainCars) => remainCars._id !== _id
            );
            setAllCars(showRemainingCars);
          }
        } catch (error) {
          console.error(error);
          toast.error("Couldn't Delete!! Try Again!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    });
  };

  return (
    <section>
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
        allCars &&
        allCars?.map((car) => (
          <div key={car._id}>
            {count === 0 ? (
              <>
                <h1 className="text-white text-center text-3xl md:text-4xl font-indie font-medium mt-20 md:mt-32 -mb-10">
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
                    <figure className="glass-products md:w-14 md:h-14">
                      <Link to={`/brand/${car.brandName}/${car._id}`}>
                        <img className="p-4" src={view} alt="" />
                      </Link>
                    </figure>
                    <figure className="glass-products md:w-14 md:h-14">
                      <Link to={`/updateCar/${car.brandName}/${car._id}`}>
                        <img className="p-4" src={update} alt="" />
                      </Link>
                    </figure>
                    <figure className="glass-products md:w-14 md:h-14">
                      {user ? (
                        <img
                          onClick={() =>
                            handleDeleteCar(car._id, car.brandName)
                          }
                          className="p-4"
                          src={remove}
                          alt=""
                        />
                      ) : (
                        <img className="p-4" src={remove} alt="" />
                      )}
                      {/* <img
                        onClick={() => handleDeleteCar(car._id, car.brandName)}
                        className="p-4"
                        src={remove}
                        alt=""
                      /> */}
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <ToastContainer />
    </section>
  );
};

export default ShowCars;
