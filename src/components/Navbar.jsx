import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        navigate('/login')
    }
    return (
        <nav className="flex flex-col gap-2">
            <Link to="/jobs" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Job Tracker</Link>

            <Link to="/leetcode" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Leetcode Tracker</Link>

            <Link to="/gym" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Workout Tracker</Link>

            <Link to="/profile" className="text-gray-400 hover:text-orange-500 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all">Profile</Link>

            <button onClick={handleLogout} className="mt-auto text-gray-400 hover:text-red-400 py-2 px-3 rounded-lg hover:bg-gray-800 transition-all text-left">Logout</button>
        </nav>
    )
}

export default Navbar;