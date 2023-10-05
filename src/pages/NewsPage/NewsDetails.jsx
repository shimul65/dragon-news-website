import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import editor1 from '../../assets/editorsInsight1.png'
import editor2 from '../../assets/editorsInsight2.png'
import editor3 from '../../assets/editorsInsight3.png'


const NewsDetails = () => {
    const { id } = useParams();
    console.log(id);
    const news = useLoaderData();
    console.log(news);

    const singleNews = news.find(singleNews => singleNews._id == id)
    const { title, image_url, details } = singleNews;

    return (
        <div className="mx-auto container">
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3 space-y-6  md:mx-2 lg:mx-0">
                    <h2 className="text-xl text-center md:text-left pt-6 font-bold ">Dragon News</h2>
                    <div className='px-5 py-5 border'>
                        <h2 className='text-2xl font-bold md:w-3/4 mb-5'>{title}</h2>
                        <img className='w-full' src={image_url} alt="" /><p className='my-8 text-justify'>{details}</p>
                        <Link to='/'><button className="flex items-center gap-2 text-xl font-medium px-4 py-2 bg-[#D72050] text-white"><BsArrowLeft></BsArrowLeft><span>All news in this category</span></button></Link>
                    </div>
                    <div className="">
                        <h2 className="text-xl text-center md:text-left pt-6 mb-3 font-bold ">Editors Insight</h2>
                        <div className=' py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <div className="md:px-3 lg:px-0">
                                <img className='w-full rounded-t-lg' src={editor1} alt="" />
                                <h2 className='text-xl font-bold my-5 mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                                <div className=''>
                                    <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2022</span></p>
                                </div>
                            </div>
                            <div className="md:px-3 lg:px-0">
                                <img className='w-full rounded-t-lg' src={editor2} alt="" />
                                <h2 className='text-xl font-bold my-5 mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                                <div className=''>
                                    <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2022</span></p>
                                </div>
                            </div>
                            <div className="md:px-3 lg:px-0">
                                <img className='w-full rounded-t-lg' src={editor3} alt="" />
                                <h2 className='text-xl font-bold my-5 mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                                <div className=''>
                                    <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2022</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hidden md:block">
                    <RightSideNav></RightSideNav>
                </div>
            </div>


        </div>
    );
};

export default NewsDetails;