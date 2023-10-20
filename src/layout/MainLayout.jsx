import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <section>
      <div className="bg-main-bg bg-cover bg-center bg-no-repeat bg-fixed bg-blue-gray-800 bg-opacity-90 bg-blend-multiply">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default MainLayout;
