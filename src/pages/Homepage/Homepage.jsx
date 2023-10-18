import Banner from "../../components/Banner/Banner";
import FollowUs from "../../components/FollowUs/FollowUs";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Homepage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <FollowUs></FollowUs>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;