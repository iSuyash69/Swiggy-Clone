import resList from "./resList";

const Filters=()=>{
    return(
        <div className="filters-container">
            <button className="filter-btn fb1" onClick={()=>{console.log("gello");}}>Filter <i class="fa-solid fa-filter"></i></button>
            <button className="filter-btn">Fast Delivery</button>
            <button className="filter-btn">New on Swiggy</button>
            <button className="filter-btn" onClick={()=>{
                resList.restaurants=resList.restaurants.filter(
                    (res)=>res.info.avgRating>4.5
                );
                console.log(resList.restaurants);
                }}
            >Ratings 4.0+</button>
            <button className="filter-btn">Pure Veg</button>
            <button className="filter-btn">Rs.300-Rs.600</button>
            <button className="filter-btn">Less Than Rs.300</button>
        </div>
    );
}

export default Filters