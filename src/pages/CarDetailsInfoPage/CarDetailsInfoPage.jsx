import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarDetailsInfoPage = () => {
  const carDetails = useLoaderData();
  // console.log(carDetails);

  const handleAddToCart = async (carDetails) => {
    console.log(carDetails);

    // send data to the server
    try {
      const response = await fetch("http://localhost:5001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carDetails),
      });
      const result = await response.json();
      console.log(result);
      if (result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Added to Cart Successfully!",
          confirmButtonText: "Cool",
        });
      }
    } catch (error) {
      console.error(error.message);
      if (error.message.includes("Already exists in DB")) {
        toast.error("Item is Already in Your Cart", {
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
    <section>
      <NavBar></NavBar>
      {/* Car Details */}
      <div className="container mx-auto mt-32">
        <div className="glass-products p-5 md:p-10 lg:p-20 xl:p-28">
          <figure className="mb-20 lg:mb-28">
            <img className="rounded-lg" src={carDetails.image} alt="" />
          </figure>
          <div className="space-y-5 lg:space-y-8">
            <h1 className="text-menu text-xl lg:text-3xl">Name:</h1>
            <span className="text-blue-gray-200 text-lg lg:text-2xl">
              {carDetails?.name}
            </span>
            <h1 className="text-menu text-xl lg:text-3xl">Brand Name:</h1>
            <span className="text-blue-gray-200 text-lg lg:text-2xl">
              {carDetails?.brandName}
            </span>
            <p className="text-menu text-xl lg:text-3xl">Description:</p>
            <span className="text-blue-gray-200 text-lg lg:text-2xl">
              {carDetails?.description}
            </span>
            <h1 className="text-menu text-xl lg:text-3xl pt-5">
              Why Choose Us?
            </h1>
            <ul className="space-y-3 text-lg lg:text-xl">
              <li className="text-gray-200">Online payment</li>
              <li className="text-gray-200">Cash on Delivery</li>
              <li className="text-gray-200">Free shipping & returns</li>
              <li className="text-gray-200">Secure online shopping</li>
              <li className="text-gray-200">Payment gateway integration</li>
              <li className="text-gray-200">Easy checkout process</li>
              <li className="text-gray-200">
                Shoppers can easily track their orders
              </li>
              <li className="text-gray-200">
                Wide range of products available in our store
              </li>
              <li className="text-gray-200">
                Our customers are always satisfied with our services
              </li>
              <li className="text-gray-200">
                We provide best quality products at affordable prices
              </li>
            </ul>
            <p className="text-menu text-xl lg:text-3xl">Price:</p>
            <p className="text-blue-gray-200 text-lg lg:text-2xl">
              {carDetails?.price}
            </p>
            <p className="text-gray-200 md:text-lg">
              Add to Cart and check out today to avail a free delivery around
              the country. No service charge needed. 5 years mechanical parts
              warranty. Hurry up !!!
            </p>
            <button
              className="text-menu text-xl btn glass"
              onClick={() => {
                handleAddToCart(carDetails);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </section>
  );
};

export default CarDetailsInfoPage;
