const AdvertisementSlider = () => {
  return (
    <section className="carousel w-full">
      {/* slider 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/4f5tsnd/slider-toyota.jpg"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1.5 right-1.5 top-1/2 lg:left-6 lg:right-6">
          <a
            href="#slide3"
            className="hover:bg-metal w-5 md:w-8 lg:w-10 rounded-full flex justify-center items-center"
          >
            <img src="https://i.ibb.co/PtjY0q3/back-50.png" alt="" />
          </a>
          {/* slide 1 overlay text */}
          <div className="text-center">
            <h2 className="text-blue-gray-200 text-sm md:text-3xl lg:text-4xl xl:text-6xl font-annie font-semibold">
              Discover the World <br /> of Luxury
            </h2>
            <p className="text-gray-400 text-xs md:text-sm lg:text-lg md:font-medium my-1 md:mt-3 md:mb-5 lg:mt-6 lg:mb-8">
              Step into a world of opulence and innovation. <br />
              Explore our curated collection of prestigious <br />
              brands and exceptional cars. Unleash your <br />
              passion for automotive excellence.
            </p>
            <button className="text-black text-xs md:text-base lg:text-lg font-medium md:font-semibold px-2 py-1 md:px-5 md:py-2.5 lg:px-5 lg:py-3 bg-menu rounded-lg">
              Explore
            </button>
          </div>
          {/* slide 1 overlay text end */}
          <a
            href="#slide2"
            className="hover:bg-metal w-5 md:w-8 lg:w-10 rounded-full flex justify-center items-center"
          >
            <img src="https://i.ibb.co/9hHKzZ8/forward-50.png" alt="" />
          </a>
        </div>
      </div>
      {/* slider 1 end */}
      {/* slider 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/j8S2jsN/slider-bmw.jpg" className="w-full" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1.5 right-1.5 top-1/2 lg:left-6 lg:right-6">
          <a
            href="#slide1"
            className="hover:bg-metal w-5 md:w-8 lg:w-10 rounded-full flex justify-center items-center"
          >
            <img src="https://i.ibb.co/PtjY0q3/back-50.png" alt="" />
          </a>
          {/* slide 2 overlay text */}
          <div className="text-center">
            <h2 className="text-blue-gray-200 text-sm md:text-3xl lg:text-4xl xl:text-6xl font-annie font-semibold">
              Experience Pure <br /> Adrenaline
            </h2>
            <p className="text-gray-400 text-xs md:text-sm lg:text-lg md:font-medium my-1 md:mt-3 md:mb-5 lg:mt-6 lg:mb-8">
              Drive into the future with the latest <br />
              sports cars. Feel the thrill, hear the roar <br />
              and experience the unmatched power. <br />
              Unleash the adventurer within you.
            </p>
            <button className="text-black text-xs md:text-base lg:text-lg font-medium md:font-semibold px-2 py-1 md:px-5 md:py-2.5 lg:px-5 lg:py-3 bg-menu rounded-lg">
              Explore
            </button>
          </div>
          {/* slide 2 overlay text */}
          <a
            href="#slide3"
            className="hover:bg-metal w-5 md:w-8 lg:w-10 rounded-full flex justify-center items-center"
          >
            <img src="https://i.ibb.co/9hHKzZ8/forward-50.png" alt="" />
          </a>
        </div>
      </div>
      {/* slider 2 end */}
      {/* slider 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/xh4PK2F/slider-suv.jpg" className="w-full" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1.5 right-1.5 top-1/2 lg:left-6 lg:right-6">
          <a
            href="#slide2"
            className="hover:bg-metal w-5 md:w-8 lg:w-10 rounded-full flex justify-center items-center"
          >
            <img src="https://i.ibb.co/PtjY0q3/back-50.png" alt="" />
          </a>
          {/* slide 3 overlay text */}
          <div className="text-center">
            <h2 className="text-blue-gray-200 text-sm md:text-3xl lg:text-4xl xl:text-6xl font-annie font-semibold">
              Your Journey, <br /> Your Way
            </h2>
            <p className="text-gray-400 text-xs md:text-sm lg:text-lg md:font-medium my-1 md:mt-3 md:mb-5 lg:mt-6 lg:mb-8">
              For family outings or solo adventures, <br />
              our SUVs offer the perfect blend of <br />
              space, safety and style. Find your <br />
              path to unforgettable moments.
            </p>
            <button className="text-black text-xs md:text-base lg:text-lg font-medium md:font-semibold px-2 py-1 md:px-5 md:py-2.5 lg:px-5 lg:py-3 bg-menu rounded-lg">
              Explore
            </button>
          </div>
          {/* slide 3 overlay text end */}
          <a
            href="#slide1"
            className="hover:bg-metal w-5 md:w-8 lg:w-10 rounded-full flex justify-center items-center"
          >
            <img src="https://i.ibb.co/9hHKzZ8/forward-50.png" alt="" />
          </a>
        </div>
      </div>
      {/* slider 3 end */}
    </section>
  );
};

export default AdvertisementSlider;
