import { IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../utils/cartSlice';

// Mock menu items data (used if no props passed)
const mockMenuItems = [
  {
    card: {
      info: {
        id: "1",
        name: "Butter Chicken",
        description: "Creamy tomato-based chicken curry with tender pieces",
        price: 35000,
        defaultPrice: 35000,
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
  },
  {
    card: {
      info: {
        id: "3",
        name: "Garlic Naan",
        description: "Soft oven-baked bread with garlic and herbs",
        price: 8000,
        imageId: "mdipoyzfzsa7n7igskht"
      }
    }
  },
  {
    card: {
      info: {
        id: "4",
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with tender chicken pieces and spices",
        defaultPrice: 30000,
        imageId: "cd832b6167eb9f88aeb1ccdebf38d942"
      }
    }
  },
  {
    card: {
      info: {
        id: "5",
        name: "Paneer Tikka",
        description: "Grilled cottage cheese marinated in Indian spices",
        price: 28000,
        imageId: "un4omn7rcunkmlw6vikr"
      }
    }
  }
];

const ItemList = ({ items }) => {
  const menuItems = items || mockMenuItems;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action to add item to cart
    console.log("Adding item to cart:", item.card.info.name);
    dispatch(addItemToCart(item.card.info));
  };

  return (
    <div>
      {menuItems.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-b-2 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          {/* Text Info */}
          <div className="w-full md:w-9/12">
            <div className="py-2">
              <span className="font-semibold text-lg">{item.card.info.name}</span>
              <span className="text-green-600 font-bold ml-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600">{item.card.info.description}</p>
          </div>

          {/* Image and Add Button */}
          <div className="w-full md:w-3/12 relative flex justify-center">
            <div className="relative">
              <img
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-32 h-24 md:w-full md:h-20 rounded-md object-cover"
              />
              <button 
                className="absolute bottom-1 right-1 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md transition duration-300"
                onClick={() => handleAddItem(item)}
              >
                + Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
