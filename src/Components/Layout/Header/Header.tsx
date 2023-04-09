import { Link } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Countries</h1>
            <div className="center menuList">
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
            </div>
        </div>
    );
}

export default Header;
