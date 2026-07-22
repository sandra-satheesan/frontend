import { useState, useEffect } from 'react'
import API from '../api/axios'

function ProfilePage() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        API.get('/auth/me/').then(response => setUser(response.data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-500 mb-6">Profile</h1>
            {user ? (
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <p className="text-gray-500 text-sm">Username</p>
                            <p className="text-white font-semibold">{user.username}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Email</p>
                            <p className="text-white font-semibold">{user.email}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Date of Birth</p>
                            <p className="text-white font-semibold">{user.dob}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Age</p>
                            <p className="text-white font-semibold">{user.age} years</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Height</p>
                            <p className="text-white font-semibold">{user.height} cm</p>
                        </div>
                    </div>

                </div>
            ) : (
                <p className="text-gray-400">Loading...</p>
            )}
        </div>
    )
}

export default ProfilePage