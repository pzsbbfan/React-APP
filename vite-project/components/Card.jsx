/* eslint-disable react/prop-types */
export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`./assets/${props.coverImg}`} alt="zaferes" />
            <div>
                <div className="card--stats">
                    <img className="card--star" src="./assets/Star.png" alt="star"  />
                    <span>{props.stats.rating}</span>
                    <span className="grey">{props.stats.reviewCount} •</span>
                    <span className="grey">{props.location}</span>
                </div>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}