import ShowCars from "../../components/BrandCarShow/ShowCars";
import AdvertisementSlider from "../../components/AdvertisementSlider/AdvertisementSlider";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const OneBrandAllCarShowPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AdvertisementSlider></AdvertisementSlider>
            <ShowCars></ShowCars>
            <Footer></Footer>
        </div>
    );
};

export default OneBrandAllCarShowPage;