// CategoryItems.js
import React from 'react';
import { IMG_CDN_URL } from '../utils/mockData';
import { addItems } from '../utils/redux/cartSlice';
import { useDispatch } from 'react-redux';

const CategoryItems = ({ items }) => {
  console.log('itemsss', items);
  const dispatch = useDispatch();


  const handleClick = (item) => {
    dispatch(addItems(item));
  }
  return (
    <ul className="category_item_container">
      {items.map((item) => (
        <li key={item?.card?.info?.id}>
          <div className="food_img">
            <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
          </div>
          <h4>{item?.card?.info?.name}</h4>
          <span> ₹ {Math.floor(item?.card?.info?.price / 100)} </span>
          <div>
            <button onClick={() => handleClick(item)}>Add +</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryItems;
