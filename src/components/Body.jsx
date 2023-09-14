import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import OffersGrid from "./OffersGrid";
import RestaurantsGrid from "./RestaurantsGrid/RestaurantsGrid";


const Body=()=>{

    const [RestaurantsList,setRestaurantsList]=useState([]);
    const [OffersList,setOffersList]=useState([]);
    const [FilteredList,setFilteredList]=useState([]);

    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            setRestaurantsList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);               //making a copy of RestuarantList , this will be modifed while the real one will remain intact
            setOffersList(json.data.cards[0].card.card.imageGridCards.info);
        })
        .catch(()=>{
            console.log("request failed");
        })
    }

    console.log(RestaurantsList);
    console.log(OffersList);

    return(
        <div className="body">
            <SearchBar RestaurantsList={RestaurantsList} setFilteredList={setFilteredList}/>
            <OffersGrid OffersList={OffersList} setOffersList={setOffersList}/>
            <RestaurantsGrid RestaurantsList={RestaurantsList} FilteredList={FilteredList} setFilteredList={setFilteredList}/>
        </div>
    );
}

export default Body;