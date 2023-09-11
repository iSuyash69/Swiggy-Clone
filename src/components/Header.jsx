import myImage from "../Assets/pngwing.com.png";

const Header=()=>{
    return(
        <div className="header">
           <nav className="nav">
                <div className="nav-logo">
                    <img src={myImage} alt="mc"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
                </div>
           </nav> 
        </div>
    );
}

export default Header;