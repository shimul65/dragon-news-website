import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-5 bg-gray-200 p-4 mx-2 md:mx-4 rounded-md">
            <button className="btn btn-secondary bg-red-600 text-lg font-medium">Latest</button>
            <Marquee pauseOnHover={true} gradientColor="[255, 255, 255]">
                <Link className="mr-8" to='/'>Match Highlights: Germany vs Spain — as it happened   !
                </Link>  
                <Link className="mr-8" to='/'>Match Highlights: Germany vs Spain — as it happened   !
                </Link>  
                <Link className="mr-8" to='/'>Match Highlights: Germany vs Spain — as it happened   !
                </Link>  
            </Marquee>
        </div>
    );
};
export default BreakingNews;