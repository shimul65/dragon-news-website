import PropTypes from 'prop-types';
import { BsShare, BsBookmark, BsEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {

    const { rating, total_view, title, author, image_url, details, _id } = singleNews;
    const { number } = rating;
    const { name, published_date, img } = author;

    return (
        <div className='border mx-2'>
            <div className='flex justify-between items-center p-3 bg-gray-100'>
                <div className='flex gap-4'>
                    <img className='w-10 rounded-full' src={img} alt="" />
                    <div className='space-y-1'>
                        <p>{name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <BsBookmark></BsBookmark>
                    <BsShare></BsShare>
                </div>
            </div>
            <div className='px-5 py-3'>
                <h2 className='text-xl font-bold md:w-3/4 mb-5'>{title}</h2>
                <img className='w-full' src={image_url} alt="" />
                {details.length > 200 ? <p className='my-8 text-justify'>{details.slice(0, 200)}... <Link to={`/news/${_id}`} className='text-[#FF8C47]'>Read More</Link></p> : <p className='my-8 text-justify'>{details}</p>}
                <hr className='my-5' />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <p className='text-lg font-medium'>{number}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <BsEyeFill></BsEyeFill>
                        </div>
                        <p>{total_view}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsCard;
NewsCard.propTypes = {
    singleNews: PropTypes.object.isRequired,

};