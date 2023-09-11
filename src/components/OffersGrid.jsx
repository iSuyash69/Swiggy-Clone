const OffersGrid=()=>{
    return(
        <div className="offers-grid">
            <div className="offers-title">
                <h2>Best Offers for you</h2>
                <div className="offers-scroller">
                    <i class="fa-solid fa-circle-arrow-left"></i>
                    <i class="fa-solid fa-circle-arrow-left fa-flip-horizontal"></i>
                </div>
            </div>
            <div className="offers-card">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7b666ba42cfb1e2774c3ce6af3d4a013"/>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/b4178cc2ecc1ccb1f6b2b0638f609f0f"/>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e"/>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62"/>
            </div>
        </div>
    );
}

export default OffersGrid;