import React, { useState } from 'react'
import CategoryItems from './CategoryItems'

const RestaurantCategory = ({ category, showContent, setShowSection }) => {
    // const [showContent, setShowContent] = useState(false);
    console.log("item", category?.card?.card?.itemCards)
    const handleClick = () =>
    {
        // setShowContent(!showContent);
        setShowSection();
    }
    return (
        <div className="category_container">
            <div className="category_header" onClick={handleClick}>
                <h2> {category?.card?.card?.title}</h2>
                <span> 	▼ </span>
            </div>
            <div className="category_body">
                {showContent && <CategoryItems items={category?.card?.card?.itemCards} />}
            </div>

        </div>
    )
}

export default RestaurantCategory