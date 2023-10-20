import { Link } from "react-router-dom";
import view from "../../assets/icons/view.svg";
import remove from "../../assets/icons/delete.svg";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const CartItems = ({ item, cartItems, setCartItems }) => {
  const { _id, image, name, brandName, type, price } = item;

  const handleDeleteFromCart = (_id) => {

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
        // delete item from the cart collection database
        try {
          const response = await fetch(`http://localhost:5001/cart/${_id}`, {
            method: "DELETE",
          });
          const result = await response.json();
          console.log(result);
          if (result.deletedCount > 0) {
            Swal.fire("Deleted!", "Item has been Deleted.", "success");
            const showRemainingCartItems = cartItems.filter(
              (remainItems) => remainItems._id !== _id
            );
            setCartItems(showRemainingCartItems);
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
    <section className="flex">
      <figure className="w-1/2">
        <img
          className="w-screen h-[160px] lg:h-[200px] xl:h-[240px] rounded-l-lg"
          src={image}
          alt={`${name}-image`}
        />
      </figure>
      <div className="glass-cart flex flex-col justify-center items-start px-3 py-2 xl:px-5 space-y-1 lg:space-y-2 xl:space-y-3 rounded-r-lg w-1/2 h-[160px] lg:h-[200px] xl:h-[240px]">
        <p className="text-blue-gray-200 lg:text-lg xl:text-2xl font-semibold">
          {name}
        </p>
        <p className="text-gray-400 text-sm lg:text-base xl:text-lg font-medium">
          {type}
        </p>
        <p className="text-menu text-sm font-medium lg:text-base xl:text-lg xl:font-semibold">
          {price}
        </p>
        {/* icons */}
        <div className="flex gap-5 pt-2 lg:pt-4">
          <figure className="glass-products md:w-10 rounded">
            <Link to={`/brand/${brandName}/${_id}`}>
              <img className="p-1.5 md:p-2  " src={view} alt="" />
            </Link>
          </figure>
          <figure className="glass-products md:w-10 rounded">
            <img
              onClick={() => handleDeleteFromCart(_id)}
              className="p-1.5 md:p-2"
              src={remove}
              alt=""
            />
          </figure>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

CartItems.propTypes = {
  item: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default CartItems;
