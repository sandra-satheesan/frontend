import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex flex-col gap-2">
            <Link to="/jobs" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Job Tracker</Link>

            <Link to="/leetcode" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Leetcode Tracker</Link>

            <Link to="/gym" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Workout Tracker</Link>

            <Link to="/profile" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Profile</Link>
        </nav>
    )
}

export default Navbar;