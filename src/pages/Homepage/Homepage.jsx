import Banner from "../../components/Banner/Banner";
import FollowUs from "../../components/FollowUs/FollowUs";
import NavBar from "../../components/NavBar/NavBar";

const Homepage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Homepage;