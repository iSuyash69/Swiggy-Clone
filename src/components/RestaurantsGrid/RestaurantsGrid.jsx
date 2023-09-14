import RestaurantsCard from "./RestaurantsCard";
import Filters from "../Filters";
import {ShimmerRestoCard} from "../Shimmer";

const RestaurantsGrid=({RestaurantsList,FilteredList,setFilteredList})=>{

    if(RestaurantsList.length===0){
        console.log(RestaurantsList.length);
        return ShimmerRestoCard();
    }

    return(
        <div className="resto-grid">
            <div id="hr">
                <hr></hr>
            </div>
            <h2 className="resto-title">Restaurants with online food delivery in Bangalore</h2>
            <Filters RestaurantsList={RestaurantsList} setFilteredList={setFilteredList}/>
            <div className="resto-card-container">
                {FilteredList.map((restaurants,i)=>{
                   return <RestaurantsCard key={i} resData={restaurants}/>
                }
                )}
            </div>
        </div>
    );
} 

export default RestaurantsGrid;