import { useEffect, useState } from "react";
import Cards from "./Cards";
import { swiggy_api_URL } from "../utils/mockData";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(swiggy_api_URL);
    const data = await response.json();
    console.log(data, " data");
    setRestaurant(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <>
      <div className="container">
        <input className="search_bar"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {console.log(searchText)}
        <button className="search_btn" onClick={() => {
          const searchData = restaurant.filter((res) => {
            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          })
          setRestaurant(searchData);
        }}> Search </button>

        <div className="most_rated">
          <button
            className="rate_btn"
            onClick={() => {
              const filterData = restaurant.filter((item) => {
                return item?.info?.avgRating > 4.3;
              });
              setRestaurant(filterData);
            }}
          >
            {" "}
            MostRated
          </button>
        </div>
      </div >
      {restaurant?.length === 0 ? (<Shimmer />) : (
        <div className="cards">
          {restaurant.length > 0 &&
            restaurant.map((item) => {
              return <Link to={"restaurantInfo/" + item?.info?.id} >

                <Cards res={item} />

              </Link>;

            })}
        </div>
      )}
     
    </>
  );

};

export default Body;
