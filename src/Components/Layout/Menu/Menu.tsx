import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<div className="centerColumn menuList">
                <Link to="countriesCard">Countries Card</Link>
                <Link to="countriesTable">Countries Table</Link>
            </div>
        </div>
    );
}

export default Menu;
