import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showIndex, setShowIndex] = useState(null); // Initially, nothing open

  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // Simulate API call with mock data
    setTimeout(() => {
      const mockRestaurantInfo = {
        name: "Mock Restaurant",
        cuisines: ["Indian", "Chinese", "Continental"],
        costForTwoMessage: "₹300 for two",
        avgRating: 4.2,
        totalRatingsString: "1K+ ratings"
      };

      const mockCategories = [
        {
          card: {
            card: {
              title: "Recommended",
              itemCards: [
                {
                  card: {
                    info: {
                      id: "1",
                      name: "Butter Chicken",
                      description: "Creamy tomato-based chicken curry",
                      price: 35000,
                      imageId: "bmwn4n4bn6n1tcpc8x2h"
                    }
                  }
                },
                {
                  card: {
                    info: {
                      id: "2",
                      name: "Dal Makhani",
                      description: "Rich black lentils cooked in butter and cream",
                      price: 25000,
                      imageId: "xqwpuhgnsaf18te7zvtv"
                    }
                  }
                }
              ]
            }
          }
        },
        {
          card: {
            card: {
              title: "Main Course",
              itemCards: [
                {
                  card: {
                    info: {
                      id: "3",
                      name: "Chicken Biryani",
                      description: "Aromatic basmati rice with chicken",
                      defaultPrice: 30000,
                      imageId: "cd832b6167eb9f88aeb1ccdebf38d942"
                    }
                  }
                },
                {
                  card: {
                    info: {
                      id: "4",
                      name: "Paneer Tikka",
                      description: "Grilled cottage cheese",
                      price: 28000,
                      imageId: "un4omn7rcunkmlw6vikr"
                    }
                  }
                }
              ]
            }
          }
        },
        {
          card: {
            card: {
              title: "Breads",
              itemCards: [
                {
                  card: {
                    info: {
                      id: "5",
                      name: "Garlic Naan",
                      description: "Soft oven-baked bread with garlic",
                      price: 8000,
                      imageId: "mdipoyzfzsa7n7igskht"
                    }
                  }
                }
              ]
            }
          }
        }
      ];

      setResInfo(mockRestaurantInfo);
      setCategories(mockCategories);
    }, 1000);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.name}</h1>
      <p className="font-bold text-lg">
        {resInfo?.cuisines.join(", ")} - {resInfo?.costForTwoMessage}
      </p>

      {/* Categories accordion */}
      <div className="mt-6">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            } // ✅ toggle open/close
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
