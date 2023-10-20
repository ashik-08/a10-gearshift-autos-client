import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section>
      <div className="bg-main-bg bg-cover bg-center bg-no-repeat bg-fixed bg-blue-gray-800 bg-opacity-90 bg-blend-multiply">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default MainLayout;
