import { ShimmerOfferCard } from "./Shimmer";

const OffersGrid=({OffersList})=>{

    if(OffersList.length===0){
        console.log(OffersList.length);
        return ShimmerOfferCard();
    }

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
                {OffersList.map((offers,i)=>{
                   return <img className="offers-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+offers.imageId} key={i} alt="not loaded"></img>
                    }
                )}
            </div>
        </div>
    );
}

export default OffersGrid;