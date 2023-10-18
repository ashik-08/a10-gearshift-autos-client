import { Link, useLoaderData } from "react-router-dom";

const ShowBrands = () => {
  const brands = useLoaderData();
//   console.log(brands);

  return (
    <div className="container mx-auto mt-32">
      <h1 className="text-white text-center text-3xl md:text-4xl font-indie font-medium">
        Our Exclusive Brands
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {brands &&
          brands.map((brand) => (
            <Link to={`/${brand.brandName}`} key={brand._id} className="glass-products p-5 space-y-8">
              <figure className="flex justify-center items-center">
                <img
                  className="h-40 drop-shadow-lg"
                  src={brand.brandImage}
                  alt=""
                />
              </figure>
              <h3 className="text-center text-menu text-2xl font-charmon font-medium">
                {brand.brandName}
              </h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ShowBrands;
