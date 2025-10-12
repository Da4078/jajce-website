import "./HeroStyles.css";
import { Link } from "react-router-dom";
function Hero (props){
     return(
        <>
            <div className={props.cName} style={{ background: props.background }}>
                <img alt="JajceImg" src={props.heroImg}/>
           
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <Link to={props.url} className={props.btnClass}>
                        {props.buttonText}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hero;