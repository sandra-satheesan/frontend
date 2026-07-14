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
            <h1>Leetcode Tracker</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="problem" value={formData.problem} onChange={handleChange} placeholder="problem" />
                <br />
                <input type="number" name="problem_number" value={formData.problem_number} onChange={handleChange} placeholder="Problem Number" />
                <br />
                <select name="level" value={formData.level} onChange={handleChange}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">hard</option>
                </select>
                <br />
                <input type="text" name="pattern" value={formData.pattern} onChange={handleChange} placeholder="pattern" />
                <br />
                <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="notes" />
                <br />
                <button>Submit</button>


            </form>

            <ul>
                {leetcodes.map(leetcode => (
                    <li key={leetcode.id}>
                        <h3>{leetcode.date}</h3>
                        <h2>{leetcode.problem}</h2>
                        <h3>{leetcode.level}</h3>
                        <h3>{leetcode.pattern}</h3>
                        <h3>{leetcode.notes}</h3>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default LeetcodePage