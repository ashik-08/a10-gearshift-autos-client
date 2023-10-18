import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section>
      <div className="bg-main-bg bg-cover bg-center bg-no-repeat bg-fixed bg-blue-gray-700 bg-opacity-80 bg-blend-color-burn">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default MainLayout;
