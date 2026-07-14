import { useState, useEffect } from 'react'
import API from '../api/axios'

function JobsPage() {
    const [jobs, setJobs] = useState([])

    const [formData, setFormData] = useState({
        company: '',
        role: '',
        skills_required: '',
        status: 'no_response',
        notes: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/jobs/', formData)
            fetchJobs()
            console.log('Submitted: ', response.data);
            setFormData({ company: '', role: '', skills_required: '', status: 'no_response', notes: '' })
        } catch (error) {
            console.error('Error: ', error.response.data);
        }
    };

    const fetchJobs = () => {
        API.get('/jobs/').then(response => setJobs(response.data))
    }
    useEffect(() => {
        fetchJobs()
    }, []);

    return (
        <div>
            <h1>Job Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder='Company Name' />
                <br />
                <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder='Role' />
                <br />
                <input type="text" name="skills_required" value={formData.skills_required} onChange={handleChange} placeholder='Skills Required' />
                <br />
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="no_response">No Response</option>
                    <option value="reverted">Reverted</option>
                    <option value="rejected">Rejected</option>
                    <option value="assessment">Assessment Done</option>
                    <option value="interview_shortlisted">Interview Shortlisted</option>
                    <option value="offer_received">Offer Received</option>
                    <option value="withdrawn">Withdrawn</option>
                </select>
                <br />
                <input type="text" name="notes" value={formData.notes} onChange={handleChange} placeholder='Note' />
                <br />
                <button type="submit">Submit</button>

            </form>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h2>{job.company}</h2>
                        <h3>{job.date}</h3>
                        <h3>{job.role}</h3>
                        <h3>{job.skills_required}</h3>
                        <h3>{job.status}</h3>
                        <h3>{job.notes}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobsPage