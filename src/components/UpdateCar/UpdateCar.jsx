import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCar = ({ carDetails }) => {
  const { _id, name, brandName, type, price, image, rating, description } =
    carDetails;

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updatedCar = {
      name,
      brandName,
      type,
      price,
      image,
      rating,
      description,
    };
    console.log(updatedCar);

    // send updated details to the server
    try {
      const response = await fetch(
        `https://a10-gearshift-autos-server.vercel.app/brand/${brandName}/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCar),
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Car Details Updated Successfully",
          confirmButtonText: "Cool",
        });
        // form.reset();
      } else if (result.modifiedCount === 0 && result.matchedCount > 0) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "No Changes Made Yet",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error(error);
      if (error.message.includes("No such brand")) {
        toast.error(
          `Invalid Brand Name ${brandName}. (Hint: Capitalize Name)`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } else {
        toast.error("Couldn't Update!!! Try Again!!!", {
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
  };

  return (
    <section className="container mx-auto pt-12">
      <Link
        className="flex items-center gap-3 w-fit hover:bg-menu rounded-lg px-2 py-1.5"
        to="/"
      >
        <img
          className="w-8"
          src="https://i.ibb.co/PtjY0q3/back-50.png"
          alt="left"
        />
        <span className="text-white text-xl font-charmon">Back to home</span>
      </Link>
      <div className="glass-newsletter px-5 md:px-14 lg:px-28 py-20 mt-12 rounded-md">
        <h1 className="text-center text-blue-gray-200 font-annie text-3xl mb-8">
          Update Existing Car Details
        </h1>
        <p className="text-center text-blue-gray-200 text-lg mb-8 px-4 md:px-14">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCar}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <span className="space-y-4">
              <p className="text-menu text-xl font-medium">Name</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="name"
                id=""
                placeholder="Enter car name"
                required
                defaultValue={name}
              />
            </span>
            <span className="space-y-4">
              <p className="text-menu text-xl font-medium">Brand Name</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="brandName"
                id=""
                placeholder="Enter brand name"
                required
                defaultValue={brandName}
              />
            </span>
            <span className="space-y-4">
              <p className="text-menu text-xl font-medium">Type</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="type"
                id=""
                placeholder="Enter car type"
                required
                defaultValue={type}
              />
            </span>
            <span className="space-y-4">
              <p className="text-menu text-xl font-medium">Price</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="price"
                id=""
                placeholder="Enter car price"
                required
                defaultValue={price}
              />
            </span>
            <span className="space-y-4">
              <p className="text-menu text-xl font-medium">Image</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="image"
                id=""
                placeholder="Enter image URL"
                required
                defaultValue={image}
              />
            </span>
            <span className="space-y-4">
              <p className="text-menu text-xl font-medium">Rating</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="rating"
                id=""
                placeholder="Enter car rating"
                required
                defaultValue={rating}
              />
            </span>
            <span className="md:col-span-2 space-y-4">
              <p className="text-menu text-xl font-medium">Description</p>
              <input
                className="text-gray-100 w-full p-3 rounded-md bg-transparent outline-dotted outline-1 outline-blue-gray-500"
                type="text"
                name="description"
                id=""
                placeholder="Enter detailed description"
                required
                defaultValue={description}
              />
            </span>
            <span className="md:col-span-2 mt-6">
              <input
                className="bg-menu text-black text-xl font-annie w-full p-3 rounded-md border border-gray-300"
                type="submit"
                value="Update Car Details"
              />
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

UpdateCar.propTypes = {
  carDetails: PropTypes.object,
};

export default UpdateCar;
