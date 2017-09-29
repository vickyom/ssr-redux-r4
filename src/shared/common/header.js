import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <IndexLink to="/" activeClassName="active">
                        Home
                    </IndexLink>
                    {" | "}
                    <Link to="/movies" activeClassName="active">
                        Movies
                    </Link>
                    {" | "}
                    <Link to="/fav" activeClassName="active">
                        Fav
                    </Link>
                    {" | "}
                </nav>
            </div>
        );
    }
}

export default Header;
