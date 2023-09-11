import SearchBar from "./SearchBar";
import OffersGrid from "./OffersGrid";
import RestaurantsGrid from "./RestaurantsGrid/RestaurantsGrid";

const Body=()=>{
    return(
        <div className="body">
            <SearchBar/>
            <OffersGrid/>
            <RestaurantsGrid/>
        </div>
    );
}

export default Body;