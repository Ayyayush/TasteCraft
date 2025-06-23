import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { IMG_URL } from "../../utils/constants";
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {
  const { resid } = useParams();

  // Custom hook se restaurant info la rahe hain
  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimmer />;

  // Your custom hook returns restaurant with .data structure
  const {
    name = "Restaurant",
    cuisines = [],
    costForTwoString = "",
    cloudinaryImageId = "",
    avgRating = "N/A",
    deliveryTime = "N/A",
    address = "",
    area = "",
    totalRatingsString = ""
  } = resInfo?.data || {};
  console.log("resInfo:", resInfo);

  // Create dynamic menu items based on restaurant's cuisine
  const generateMenuItems = (cuisines, restaurantName) => {
    const menuItemsMap = {
      "Kerala": [
        { name: "Fish Curry", price: 35000, description: "Traditional Kerala fish curry with coconut milk and spices" },
        { name: "Appam with Stew", price: 25000, description: "Soft fermented rice pancakes with vegetable stew" },
        { name: "Puttu & Kadala", price: 20000, description: "Steamed rice cake with spiced black chickpeas" }
      ],
      "Chinese": [
        { name: "Hakka Noodles", price: 18000, description: "Stir-fried noodles with vegetables and soy sauce" },
        { name: "Manchurian", price: 22000, description: "Deep-fried vegetable balls in tangy sauce" },
        { name: "Fried Rice", price: 16000, description: "Wok-tossed rice with vegetables and spices" }
      ],
      "Biryani": [
        { name: "Chicken Biryani", price: 30000, description: "Aromatic basmati rice with tender chicken and spices" },
        { name: "Mutton Biryani", price: 45000, description: "Premium mutton pieces cooked with fragrant rice" },
        { name: "Veg Biryani", price: 25000, description: "Mixed vegetables layered with spiced basmati rice" }
      ],
      "Andhra": [
        { name: "Andhra Chicken Curry", price: 32000, description: "Spicy chicken curry with Andhra spices" },
        { name: "Gongura Mutton", price: 40000, description: "Mutton cooked with tangy sorrel leaves" },
        { name: "Pesarattu", price: 15000, description: "Green gram dosa with ginger chutney" }
      ],
      "South Indian": [
        { name: "Masala Dosa", price: 12000, description: "Crispy crepe with spiced potato filling" },
        { name: "Idli Sambar", price: 10000, description: "Steamed rice cakes with lentil soup" },
        { name: "Filter Coffee", price: 8000, description: "Traditional South Indian filter coffee" }
      ],
      "North Indian": [
        { name: "Butter Chicken", price: 35000, description: "Creamy tomato-based chicken curry" },
        { name: "Dal Makhani", price: 25000, description: "Rich black lentils cooked in butter and cream" },
        { name: "Naan", price: 8000, description: "Soft oven-baked bread" }
      ],
      "Continental": [
        { name: "Chicken Steak", price: 45000, description: "Grilled chicken breast with herbs and sauce" },
        { name: "Pasta Alfredo", price: 28000, description: "Creamy white sauce pasta with vegetables" },
        { name: "Caesar Salad", price: 22000, description: "Fresh lettuce with parmesan and croutons" }
      ],
      "American": [
        { name: "Burger", price: 25000, description: "Juicy beef patty with cheese and fries" },
        { name: "Buffalo Wings", price: 30000, description: "Spicy chicken wings with blue cheese dip" },
        { name: "BBQ Ribs", price: 40000, description: "Tender pork ribs with barbecue sauce" }
      ],
      "Italian": [
        { name: "Margherita Pizza", price: 35000, description: "Classic pizza with tomato, mozzarella and basil" },
        { name: "Spaghetti Carbonara", price: 32000, description: "Pasta with eggs, cheese, and pancetta" },
        { name: "Tiramisu", price: 18000, description: "Coffee-flavored Italian dessert" }
      ],
      "Desserts": [
        { name: "Chocolate Brownie", price: 15000, description: "Rich chocolate brownie with vanilla ice cream" },
        { name: "Gulab Jamun", price: 12000, description: "Sweet milk dumplings in sugar syrup" },
        { name: "Ice Cream Sundae", price: 18000, description: "Vanilla ice cream with chocolate sauce and nuts" }
      ]
    };

    let menuItems = [];
    let itemId = 1;

    // Add items based on cuisines
    cuisines.forEach(cuisine => {
      if (menuItemsMap[cuisine]) {
        menuItems.push(...menuItemsMap[cuisine].map(item => ({
          ...item,
          id: itemId++,
          imageId: cloudinaryImageId
        })));
      }
    });

    // If no specific cuisine matches, add some generic items
    if (menuItems.length === 0) {
      menuItems = [
        { id: 1, name: "Special Thali", price: 30000, description: "Complete meal with rice, dal, vegetables and bread", imageId: cloudinaryImageId },
        { id: 2, name: "Fried Rice", price: 20000, description: "Aromatic rice with vegetables and spices", imageId: cloudinaryImageId },
        { id: 3, name: "Curry", price: 25000, description: "Traditional curry with your choice of protein", imageId: cloudinaryImageId }
      ];
    }

    // Limit to 6 items max to avoid too long menus
    return menuItems.slice(0, 6);
  };

  const dynamicMenuItems = generateMenuItems(cuisines, name);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Restaurant Header */}
        <header className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">              <img 
                className="w-48 h-36 object-cover rounded-lg shadow-md"
                src={IMG_URL + cloudinaryImageId} 
                alt="Restaurant Info" 
              />
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                <h3 className="text-lg text-gray-600">{cuisines?.join(', ')}</h3>
              </div>              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                  <AiOutlineStar className="text-green-600 mr-1" />
                  <span className="text-green-700 font-medium">{avgRating}</span>
                </div>
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <FiClock className="text-blue-600 mr-1" />
                  <span className="text-blue-700 font-medium">{deliveryTime} MINS</span>
                </div>
                <div className="text-lg font-semibold text-gray-700">{costForTwoString}</div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Area:</strong> {area}</p>
                <p><strong>Ratings:</strong> {totalRatingsString}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Menu Section */}        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Menu</h2>
            <h3 className="text-lg text-gray-600">{dynamicMenuItems?.length || 0} items</h3>
          </div>
          
          <div className="space-y-4">
            {dynamicMenuItems && dynamicMenuItems.length > 0 ? (
              dynamicMenuItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h2>
                      <h3 className="text-lg font-bold text-green-600 mb-2">
                        ₹{item.price / 100}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    {item.imageId && (
                      <div className="flex-shrink-0">
                        <img 
                          className="w-32 h-32 object-cover rounded-lg shadow-md"
                          src={IMG_URL + item.imageId} 
                          alt="Menu Item" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No menu items available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};








export default RestaurantMenu;