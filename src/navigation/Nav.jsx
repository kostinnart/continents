import {NavLink} from "react-router-dom";


export const Nav = (props) => {
    return (
        <div>
            <NavLink to="/"></NavLink>
            <NavLink to="/europe" ></NavLink>
            <NavLink to="/asia"></NavLink>
            <NavLink to="/africa"></NavLink>
            <NavLink to="/oceania"></NavLink>
            <NavLink to="/northamerica"></NavLink>
            <NavLink to="/southamerica"></NavLink>
        </div>

    )
}