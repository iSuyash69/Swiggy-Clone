export const ShimmerRestoCard=()=>{

    const shimmerCard=()=>{
        const shimmerCards=[];
        for(let i=0;i<12;i++){
           shimmerCards.push(<div className="shimmer-card"></div>);
        }
        return shimmerCards;
    }
    return(
        <div className="shimmer-card-container">
            {shimmerCard()}
        </div>
    )
}

export const ShimmerOfferCard=()=>{
    return(
        <div className="shimmer-offer-card-container">
            <div className="shimmer-offer-card"></div>
            <div className="shimmer-offer-card"></div>
            <div className="shimmer-offer-card"></div>
        </div>
    )
}


