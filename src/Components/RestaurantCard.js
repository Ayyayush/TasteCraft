import { IMG_URL } from "../../utils/constants";
import { CDN_URL } from "../../utils/constants";


// const RestaurantCard = (props) => {
//   const { resData } = props;
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     deliveryTime,
//   } = resData?.data;

//   // Use Swiggy CDN format, fallback to a placeholder if imageId is missing
//   const imageUrl = cloudinaryImageId
//     ? `${IMG_URL}${cloudinaryImageId}`
//     : 'https://via.placeholder.com/264x288?text=No+Image';

//   return (
//     <div
//       className="res-card"
//       style={{
//         backgroundColor: '#f0f0f0',
//         padding: '16px',
//         borderRadius: '8px',
//         margin: '12px',
//         width: '250px',
//         boxSizing: 'border-box',
//       }}
//     >
//       <img
//         className="res-logo"
//         src={imageUrl}
//         alt={name}
//         style={{ width: '100%', borderRadius: '6px' }}
//       />
//       <div className="res-details" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
//         <h3>{name}</h3>
//         <h4>{cuisines.join(', ')}</h4>
//         <h4>{avgRating} stars</h4>
//         <h4>₹{costForTwo / 100} FOR TWO</h4>
//         <h4>{deliveryTime} minutes</h4>
//       </div>
//     </div>
//   );
// };


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
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};




export default RestaurantCard;