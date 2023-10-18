const Banner = () => {
  return (
    <section className="hero min-h-[70vh] bg-hero-bg bg-cover bg-bottom bg-no-repeat">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-5xl font-annie font-bold">
            Discover the Future of Driving
          </h1>
          <p className="mb-5">
            Explore a world of innovation and elegance with our handpicked
            selection of the finest automobiles. Your journey begins here.
          </p>
          <button className="btn glass">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
