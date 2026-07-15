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

    const handleUpdate = async (id, updatedData) => {
        try {
            await API.patch(`jobs/${id}/`, updatedData)
            fetchData()
        } catch (error) {
            console.error(error.response.data)
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await API.post('/workouts/', formData)
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
            <h1 className="text-2xl font-bold text-orange-500 mb-6">Workout Tracker</h1>

            <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
                <h2 className="text-lg font-semibold text-white mb-4">Log Today's Workout</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <label className="flex items-center justify-between bg-gray-800 text-white rounded-lg px-4 py-2">
                        <span>Workout Done</span>
                        <input type="checkbox" name="workout_done" checked={formData.workout_done} onChange={handleChange} className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-between bg-gray-800 text-white rounded-lg px-4 py-2">
                        <span>Strength Training</span>
                        <input type="checkbox" name="strength_training" checked={formData.strength_training} onChange={handleChange} className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-between bg-gray-800 text-white rounded-lg px-4 py-2">
                        <span>Cardio Done</span>
                        <input type="checkbox" name="cardio_done" checked={formData.cardio_done} onChange={handleChange} className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-between bg-gray-800 text-white rounded-lg px-4 py-2">
                        <span>Abs Done</span>
                        <input type="checkbox" name="abs_done" checked={formData.abs_done} onChange={handleChange} className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500" />
                    </label>
                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition-all">
                        Save Workout
                    </button>
                </form>
            </div>

            <div className="flex flex-col gap-4">
                {workouts.map(workout => (
                    <div key={workout.id} className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-orange-500 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h2 className="text-white font-bold text-lg">{workout.date}</h2>
                                <p className="text-gray-400 text-sm">Workout summary</p>
                            </div>
                            <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                                {workout.workout_done ? 'Completed' : 'Planned'}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                            <p className="text-gray-500">Strength: <span className="text-gray-300">{workout.strength_training ? 'Yes' : 'No'}</span></p>
                            <p className="text-gray-500">Cardio: <span className="text-gray-300">{workout.cardio_done ? 'Yes' : 'No'}</span></p>
                            <p className="text-gray-500">Abs: <span className="text-gray-300">{workout.abs_done ? 'Yes' : 'No'}</span></p>
                            <p className="text-gray-500">Workout Done: <span className="text-gray-300">{workout.workout_done ? 'Yes' : 'No'}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GymPage