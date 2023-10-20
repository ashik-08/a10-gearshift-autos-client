import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import UpdateCar from "../../components/UpdateCar/UpdateCar";

const UpdateCarPage = () => {
    const carDetails = useLoaderData();
    console.log(carDetails);

    return (
        <div>
            <NavBar></NavBar>
            <UpdateCar carDetails={carDetails}></UpdateCar>
            <Footer></Footer>
        </div>
    );
};

export default UpdateCarPage;