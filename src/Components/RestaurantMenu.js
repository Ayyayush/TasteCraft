import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  // Custom hook se restaurant info la rahe hain
  const restaurant = useRestaurantMenu(resid);

  if (!restaurant) return <Shimmer />;

  const { name, cuisines, costForTwo, costForTwoString } = restaurant.data;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{name} Menu</h2>
      <ul>
        {cuisines.map((cuisine, idx) => (
          <li key={idx}>
            {cuisine} - ₹{costForTwo ? costForTwo / cuisines.length / 100 : "N/A"}
          </li>
        ))}
      </ul>
      <p>
        <b>Total Cost for Two:</b> {costForTwoString}
      </p>
    </div>
  );
};

export default RestaurantMenu;