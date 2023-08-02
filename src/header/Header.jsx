import classes from "./header.module.css"
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <div className={classes.header}>
            <ul>
                <li>
                    <Link to="/europe">Europe</Link>
                </li>
                <li>
                    <Link to="/asia">Asia</Link>
                </li>
                <li>
                    <Link to="/africa">Africa</Link>
                </li>
                <li>
                    <Link to="/northamerica">North America</Link>
                </li>
                <li>
                    <Link to="/southamerica">South America</Link>
                </li>
                <li>
                    <Link to="/oceania">Oceania</Link>
                </li>
            </ul>

        </div>
    )
}