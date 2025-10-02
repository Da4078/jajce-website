import "./FooterStyles.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Jajce</h1>
                    <p>Vaša najdraža destinacija</p>
                </div>
                <div>
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
            <div className="bottom">
                <div>
                     <h4>Info</h4>
                     <Link to="/discover">Atrakcije</Link>
                     <Link to="/">Licensa</Link>
                </div>
                <div>
                     <h4>Zajednica</h4>
                     <Link href="/">Github</Link>
                </div>
                <div>
                     <h4>Pomoć</h4>
                     <Link to="/">Podrška</Link>
                     <Link to="/">Uvijeti korištenja</Link>
                      <Link to="/">Pravila o privatnosti</Link>
                </div>

            </div>
        </div>
    )
}

export default Footer