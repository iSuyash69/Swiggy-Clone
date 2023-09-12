import myImage from "../Assets/pngwing.com.png";

const Header=()=>{
    return(
        <div className="header">
           <nav className="nav">
                <div className="nav-logo">
                    <img src={myImage} alt="mc"/>
                    <h1><span>Z</span>wiggy</h1>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Offers</li>
                        <li>Help</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                        <li><i class="fa-solid fa-user-plus"></i></li>
                    </ul>
                </div>
           </nav> 
        </div>
    );
}

export default Header;