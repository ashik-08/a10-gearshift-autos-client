import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import CartItems from "../../components/CartItems/CartItems";
import { useState } from "react";

const MyCartPage = () => {
  const loadedCartItems = useLoaderData();
  console.log(cartItems);
  
  const [cartItems, setCartItems] = useState(loadedCartItems);

  return (
    <section>
      <NavBar></NavBar>
      {cartItems.length === 0 ? (
        <div className="container mx-auto glass-newsletter text-center mt-20 md:mt-32 px-2 md:px-16 py-12 lg:py-28">
          <h1 className="text-blue-gray-200 text-3xl md:text-4xl lg:text-5xl font-indie font-semibold">
            Your Cart is Empty!!!
          </h1>
          <p className="text-gray-300 md:text-lg xl:text-xl font-medium mt-12">
            Haven&apos;t added any items in your cart. <br />
            Go and check some of our products. <br />
            If you like something then add it. <br />
            Then check back again your cart.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-white text-center text-3xl md:text-4xl font-indie font-medium mt-20 md:mt-32 -mb-10">
            Items in your cart
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 md:mt-32 container mx-auto">
            {cartItems &&
              cartItems?.map((item) => (
                <CartItems
                  key={item._id}
                  item={item}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                ></CartItems>
              ))}
          </div>
        </>
      )}
      <Footer></Footer>
    </section>
  );
};

export default MyCartPage;
