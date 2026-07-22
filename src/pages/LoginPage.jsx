import { useState } from 'react';
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [formData, setFormData] = useState({
        username: '', password: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await API.post('/auth/login/', formData)
            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)
            navigate('/jobs')
        } catch (error) {
            setError('Invalid username or password')
        }
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 rounded-x1 p-8 border-gray-800 w-full max-w-md">
                <h1 className="text-2x1 font-bold text-orange-500 mb-6">Login</h1>
                {error && <p className="text-red-400 text-sm mb-4"> {error} </p>}
                <form onSubmit={handleSubmit} className="flex flex-col ga-3">
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition-all">Login</button>
                </form>
                <p className="text-gray-500 text-sm mt-4">Don't have an account? <a href="/register" className="text-orange-400 hover:text-orange-300">Register</a></p>
            </div>
        </div>
    )
}

export default LoginPage;