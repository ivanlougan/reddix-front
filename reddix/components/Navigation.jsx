import { Link } from "react-router-dom";

function Navigation() {

    return (
        <nav>
            <Link className="nav-item" to="/articles">Articles</Link>
            <Link className="nav-item" to="/topics">Topics</Link>
        </nav>
    )
}

export default Navigation