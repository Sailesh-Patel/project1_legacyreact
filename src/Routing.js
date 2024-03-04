import { BrowserRouter as Router, Routes, Route, Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Routing() {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img className="site_logo" src="https://pbs.twimg.com/media/ERfup7wWsAArWMk?format=jpg&name=small" />
                ENCOM INTERNATIONAL
            </Link>

            <ul>
                <CustomerLink to="/ItemsPage">Items</CustomerLink>
                <CustomerLink to="/CartPage">Cart</CustomerLink>
            </ul>
        </nav>
    )
}

function CustomerLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return (

        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>

    )
}
