import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/jobs">Job Tracker</Link>
            <Link to="/leetcode">Leetcode Tracker</Link>
            <Link to="/gym">Workout Tracker</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}

export default Navbar;