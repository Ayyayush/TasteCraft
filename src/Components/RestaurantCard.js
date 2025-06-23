import { CDN_URL } from "../../utils/constants";
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4 className="avg-rating flex items-center mt-2">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span className="ml-1">{avgRating} stars</span>
        </h4>
        <h4 className="item-price flex items-center">
          <span>₹{costForTwo / 100} FOR TWO</span>
        </h4>
        <h4 className="time flex items-center">
          <span className="icons">
            <FiClock />
          </span>
          <span className="ml-1">{deliveryTime} minutes</span>
        </h4>
      </div>
    </div>
  );
};




export default RestaurantCard;