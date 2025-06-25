import { IMG_URL } from '../utils/constants';

// Mock menu items data (this should eventually come from props)
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

const ItemList = ({ items, dummy }) => {
  // Use props if available, otherwise fall back to mock data
  const menuItems = items || mockMenuItems;

  return (
    <div>
      {menuItems.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-b-2 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div className="w-full md:w-9/12">
            <div className="py-2">
              <span className="font-semibold text-lg">{item.card.info.name}</span>
              <span className="text-green-600 font-bold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="w-full md:w-3/12 relative flex justify-center">
            <div className="relative">
              <img
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-32 h-24 md:w-full md:h-20 rounded-md object-cover"
              />
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-black text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;