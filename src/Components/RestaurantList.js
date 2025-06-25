import { useState } from 'react';
import RestaurantCategory from './RestaurantCategory';

const RestaurantList = ({ categories, dummy }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {categories.map((cat, idx) => (
        <RestaurantCategory
          key={cat.title}
          data={cat}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantList;