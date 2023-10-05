import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";
import bgImg from '../../assets/bg.png'

const Home = () => {

    const news = useLoaderData();

    return (
        <div className="container mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <div className="sticky top-0">
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2 grid grid-cols-1 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-xl text-center md:text-left pt-6 font-bold">Dragon News Home</h2>
                    </div>
                    {
                        news.map(singleNews => <NewsCard key={singleNews._id}
                            singleNews={singleNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="mb-10">
                    <div className="sticky lg:top-2 md:-top-full">
                        <RightSideNav></RightSideNav>
                        <div className='m-4 block md:hidden lg:block py-20 px-10 text-white text-center' style={{ backgroundImage: `url(${bgImg})` }}>
                            {/* <img src={bgImg} className="w-full bg" alt="" /> */}
                            <h2 className="text-3xl font-bold" style={{ lineHeight: '45px' }}>Create an Amazing Newspaper</h2>
                            <p className="my-6">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                            <button className="btn border-none hover:bg-[#b6254c] text-white bg-[#D72050]">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;