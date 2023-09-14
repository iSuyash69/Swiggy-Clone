import { useState } from "react";

const SearchBar=({RestaurantsList,setFilteredList})=>{
    const [Text,setText]=useState("");
    return(
        <div className="search-bar">
        <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Enter name of Dish or Restraurant" value={Text} onChange={(event)=>{setText(event.target.value)}}></input>
        <i className="fa-solid fa-x" id="x"></i>
        </div>
        <div className="search-btn">
            <button onClick={()=>{
                console.log(Text);

                const filteredList=RestaurantsList.filter((restaurants)=>{
                    const restaurantName=restaurants.info.name.toLowerCase();
                    const cuisineName=restaurants.info.cuisines.map((cuisine)=>{
                      return cuisine.toLowerCase();
                    });
                    return(
                        restaurantName.includes(Text.toLowerCase())||cuisineName.some((cuisine)=>{return cuisine.includes(Text.toLowerCase())})
                        );
            });
            if(filteredList.length===0){
                alert("No search found");
            }
            else{
                setFilteredList(filteredList);
            }
        }}
        ><a href="#">Search</a></button>
        </div>
    </div>
    );
}

export default SearchBar;