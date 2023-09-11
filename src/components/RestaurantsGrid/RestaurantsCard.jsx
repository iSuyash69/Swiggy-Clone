const RestaurantsCard=(props)=>{
    // console.log(props);
    const {resData}=props;
    return(
        <div className="resto-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="error 404"/>
            <h3>{resData.info.name}</h3>
            <div className="resto-rating">
                <div id="rating-star">
                    <div id="outer-circle">
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div id="rating-number">{resData.info.avgRating}</div>
            </div>
            <p>{resData.info.cuisines.join(", ")}</p>
            <p>{resData.info.locality}</p>
        </div>
    );
}

export default RestaurantsCard;