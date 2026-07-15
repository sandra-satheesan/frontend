import { useState, useEffect } from 'react'
import API from '../api/axios'

function ProfilePage() {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        API.get('/profile/').then(response => setProfile(response.data[0]))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-500 mb-6">Profile Page</h1>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h2 className="text-lg font-semibold text-white mb-4">Personal Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-400">Name</p>
                        <p className="text-white font-medium">{profile.name}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-400">Age</p>
                        <p className="text-white font-medium">{profile.age}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-400">Height</p>
                        <p className="text-white font-medium">{profile.height}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-400">Weight</p>
                        <p className="text-white font-medium">{profile.weight}</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 sm:col-span-2">
                        <p className="text-gray-400">BMI</p>
                        <p className="text-white font-medium">{profile.bmi}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage