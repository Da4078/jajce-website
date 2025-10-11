import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
             <div className="footer-text">
                    <p>© 2025 Jajce</p>
                </div>
            <div className="social-icons">
                <Link to="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-behance-square"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </Link>
            </div>
        </div>
    )
}

export default Footer