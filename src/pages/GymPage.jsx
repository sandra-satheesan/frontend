import { useState, useEffect } from 'react'
import API from '../api/axios'

function GymPage() {
    const [workouts, setWorkout] = useState([])
    const [formData, setFormData] = useState({
        workout_done: false,
        strength_training: false,
        cardio_done: false,
        abs_done: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            API.post('/workouts/', formData)
            fetchData()
            setFormData({ workout_done: false, strength_training: false, cardio_done: false, abs_done: false })
        } catch (error) {
            console.error(error.response.data)
        }
    }

    const fetchData = () => {
        API.get('/workouts/').then(response => setWorkout(response.data))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1>Workout Tracker</h1>

            <form onSubmit={handleSubmit} >
                <label>Workout Done:
                    <input type="checkbox" name="workout_done" checked={formData.workout_done} onChange={handleChange} />
                </label>
                <br />
                <label>Strength Training:
                    <input type="checkbox" name="strength_training" checked={formData.strength_training} onChange={handleChange} />
                </label>
                <br />
                <label>Cardio Done:
                    <input type="checkbox" name="cardio_done" checked={formData.cardio_done} onChange={handleChange} />
                </label>
                <br />
                <label>Abs Done:
                    <input type="checkbox" name="abs_done" checked={formData.abs_done} onChange={handleChange} />
                </label>
                <br />
                <button>Submit</button>
            </form>

            <ul>
                {workouts.map(workout => (
                    <li key={workout.id}>
                        <h2>{workout.date}</h2>
                        <h3>workot done? {workout.workout_done ? 'Yes' : 'No'}</h3>
                        <h3>strength training? {workout.strength_training ? 'Yes' : 'No'}</h3>
                        <h3>carrdio? {workout.cardio_done ? 'Yes' : 'No'}</h3>
                        <h3>abs? {workout.abs_done ? 'Yes' : 'No'}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GymPage