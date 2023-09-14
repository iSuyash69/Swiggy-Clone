const Filters=({RestaurantsList,setFilteredList})=>{
    return(
        <div className="filters-container">
            <button className="filter-btn fb1">Filter <i class="fa-solid fa-filter"></i></button>
            <button className="filter-btn" onClick={()=>{
                setFilteredList(RestaurantsList);
            }}
            >Show All</button>
            <button className="filter-btn">Fast Delivery</button>
            <button className="filter-btn">New on Swiggy</button>
            <button className="filter-btn" onClick={()=>{
                const filteredList=RestaurantsList.filter((restaurants,i)=>{
                    return restaurants.info.avgRating>4;
                });
                setFilteredList(filteredList);
            }}
            >Ratings 4.0+</button>
            <button className="filter-btn" onClick={()=>{
                const filteredList=RestaurantsList.filter((restaurants,i)=>{
                    return restaurants.info.veg==true;
                });
                setFilteredList(filteredList);
            }}>Pure Veg</button>
            <button className="filter-btn">Rs.300-Rs.600</button>
            <button className="filter-btn">Less Than Rs.300</button>
        </div>
    );
}

export default Filters