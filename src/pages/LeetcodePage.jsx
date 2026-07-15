import { useState, useEffect } from 'react'
import API from '../api/axios'

function LeetcodePage() {
    const [leetcodes, setLeetcode] = useState([])
    const [formData, setFormData] = useState({ problem: '', problem_number: '', level: 'easy', pattern: '', notes: '' })

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                ...formData, problem_number: formData.problem_number === '' ? null : parseInt(formData.problem_number)
            }
            await API.post('/leetcodes/', payload)
            fetchData()
            setFormData({ problem: '', problem_number: '', level: 'easy', pattern: '', notes: '' })
        } catch (error) {
            console.error(error.response.data)
        }
    }

    const fetchData = () => {
        API.get('/leetcodes/').then(response => setLeetcode(response.data))
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-500 mb-6">Leetcode Tracker</h1>

            <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
                <h2 className="text-lg font-semibold text-white mb-4">Add New Problem</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" name="problem" value={formData.problem} onChange={handleChange} placeholder="Problem Name"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="number" name="problem_number" value={formData.problem_number} onChange={handleChange} placeholder="Problem Number"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <select name="level" value={formData.level} onChange={handleChange}
                        className="bg-gray-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <input type="text" name="pattern" value={formData.pattern} onChange={handleChange} placeholder="Pattern"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 resize-none h-20" />
                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition-all">
                        Add Problem
                    </button>
                </form>
            </div>

            <div className="flex flex-col gap-4">
                {leetcodes.map(leetcode => (
                    <div key={leetcode.id} className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-orange-500 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h2 className="text-white font-bold text-lg">{leetcode.problem}</h2>
                                <p className="text-gray-400 text-sm">{leetcode.pattern}</p>
                            </div>
                            <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">{leetcode.level}</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-2">Problem Number: {leetcode.problem_number || 'N/A'}</p>
                        <p className="text-gray-500 text-xs">Date: {leetcode.date}</p>
                        {leetcode.notes && <p className="text-gray-400 text-sm mt-2">{leetcode.notes}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeetcodePage