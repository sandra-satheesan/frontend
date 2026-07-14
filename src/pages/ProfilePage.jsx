import { useState, useEffect } from 'react'
import API from '../api/axios'

function ProfilePage() {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        API.get('/profile/').then(response => setProfile(response.data[0]))
    }, [])
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Name: {profile.name}</h2>
            <h2>Age: {profile.age}</h2>
            <h2>Height: {profile.height}</h2>
            <h2>Weight: {profile.weight}</h2>
            <h2>BMI: {profile.bmi}</h2>
        </div>
    )
}

export default ProfilePage