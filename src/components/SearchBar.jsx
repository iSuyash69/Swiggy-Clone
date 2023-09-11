const SearchBar=()=>{
    return(
        <div className="search-bar">
        <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Enter name of Dish or Restraurant"></input>
        <i className="fa-solid fa-x" id="x"></i>
        </div>
        <div className="search-btn">
            <button><a href="#">Search</a></button>
        </div>
    </div>
    );
}

export default SearchBar;