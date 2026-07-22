import { useState } from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        dob: '',
        height: ''

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
            await API.post('/auth/register/', formData)
            navigate('/login')
        } catch (error) {
            setError('Registration failed. Please check your details.')
        }
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 w-full max-w-md">
                <h1 className="text-2xl font-bold text-orange-500 mb-6">Register</h1>
                {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />

                    <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />

                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />

                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="DOB"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />

                    <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height (in cm)"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />

                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition-all">
                        Register
                    </button>

                    <p className="text-gray-500 text-sm mt-4">Already have an account? <a href="/login" className="text-orange-400">Login</a></p>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage;