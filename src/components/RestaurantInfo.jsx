import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { MenuShimmer } from "./Shimmer";

const RestaurantInfo = () => {
    const { id } = useParams();
    const data = useRestaurantMenu(id);
    const [showSection , setShowSection] = useState(null);

    const categories =
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categoryItems = categories?.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("data", data);

return !data ? (
    <MenuShimmer />
) :
 (
        <>
            <div className='res_info'>
                <div className='res_heading'>
                    <h1> {data?.data?.cards[0]?.card?.card?.info?.name}</h1>
                </div>
               
                    <div className='res_name_rating'>
                        <h2> {data?.data?.cards[0]?.card?.card?.info?.name}</h2>
                        <h4>{data?.data?.cards[0]?.card?.card?.info?.avgRating} ★ </h4>
                    </div>
                <div className="details">
                    <p> {data?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")} </p>
                    <p>
                        {data?.data?.cards[0]?.card?.card?.info?.locality},{" "}
                        {data?.data?.cards[0]?.card?.card?.info?.city}{" "}
                        <p> {data?.data?.cards[0]?.card?.card?.info?.feeDetails?.message} </p>
                    </p>
                    <p>{data?.data?.cards[0]?.card?.card?.info?.sla?.slaString} 🏍️</p>
                </div>

            </div>
            <div className='res_menu'>
                {categoryItems?.map((item,index) => (
                    <RestaurantCategory category={item}
                    showContent ={ index === showSection ? true : false} 
                    setShowSection={ () => setShowSection(index)} />
                ))}
            </div>
        </>
    );
};

export default RestaurantInfo;
