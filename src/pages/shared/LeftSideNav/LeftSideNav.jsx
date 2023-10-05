import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import { AiOutlineCalendar } from "react-icons/ai";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6 sticky top-2 ">
            <h2 className="text-xl text-center md:text-left pt-6 font-bold">All Categories {categories.length}</h2>
            <div className="grid grid-cols-4 md:grid-cols-1 px-4 md:px-0 text-center md:text-left items-center">
                {
                    categories.map(category => <Link className="block text-xs font-semibold px-8 py-4 hover:bg-gray-200 "
                        key={category.id}
                        to={`/category/${category.id}`}>
                        {category.name}
                    </Link>)
                }
            </div>
            <div className='px-5 py-3'>
                <img className='w-full' src={img1} alt="" />
                <h2 className='text-xl font-bold my-5 mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex items-center gap-5'>
                    <p className="font-medium">Sports</p>
                    <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2022</span></p>
                </div>
            </div>
            <div className='px-5 py-3'>
                <img className='w-full' src={img2} alt="" />
                <h2 className='text-xl font-bold my-5 mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex items-center gap-5'>
                    <p className="font-medium">Sports</p>
                    <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2022</span></p>
                </div>
            </div>
            <div className='px-5 py-3'>
                <img className='w-full' src={img3} alt="" />
                <h2 className='text-xl font-bold my-5 mb-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex items-center gap-5'>
                    <p className="font-medium">Sports</p>
                    <p className="text-[#9F9F9F] flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> <span>Jan 4, 2022</span></p>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;