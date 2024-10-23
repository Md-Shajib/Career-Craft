import Banner from "./Banner/Banner";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import JobCategoryList from "./JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;