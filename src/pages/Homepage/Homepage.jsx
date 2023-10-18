import Banner from "../../components/Banner/Banner";
import FollowUs from "../../components/FollowUs/FollowUs";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Newsletter from "../../components/Newsletter/Newsletter";
import ShowBrands from "../../components/ShowBrands/ShowBrands";

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <ShowBrands></ShowBrands>
            <FollowUs></FollowUs>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;