import RestaurantsCard from "./RestaurantsCard";
import resList from "../resList";
import Filters from "../Filters";

const RestaurantsGrid=()=>{
    return(
        <div className="resto-grid">
            <div id="hr">
                <hr></hr>
            </div>
            <h2 className="resto-title">Restaurants with online food delivery in Bangalore</h2>
            <Filters/>
            <div className="resto-card-container">
                {resList.restaurants.map((restaurants,i)=>(
                    <RestaurantsCard key={i} resData={restaurants}/>
                ))}
            </div>
        </div>
    );
} 

export default RestaurantsGrid;