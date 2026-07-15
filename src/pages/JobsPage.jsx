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

    const handleUpdate = async (id, updatedData) => {
        try {
            await API.patch(`/jobs/${id}/`, updatedData)
            fetchJobs()
        } catch (error) {
            console.error(error.response.data)
        }
    }

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
            <h1 className="text-2xl font-bold text-orange-500 mb-6">Job Tracker</h1>

            {/* Form Card */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
                <h2 className="text-lg font-semibold text-white mb-4">Add New Application</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="text" name="skills_required" value={formData.skills_required} onChange={handleChange} placeholder="Skills Required"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500" />
                    <select name="status" value={formData.status} onChange={handleChange} className="bg-gray-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="no_response">No Response</option>
                        <option value="reverted">Reverted</option>
                        <option value="rejected">Rejected</option>
                        <option value="assessment">Assessment Done</option>
                        <option value="interview_shortlisted">Interview Shortlisted</option>
                        <option value="interview_done">Interview Done</option>
                        <option value="offer_received">Offer Received</option>
                        <option value="withdrawn">Withdrawn</option>
                    </select>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes"
                        className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500 resize-none h-20" />
                    <button type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition-all">
                        Add Application
                    </button>
                </form>
            </div>

            {/* Jobs List */}
            <div className="flex flex-col gap-4">
                {jobs.map(job => (
                    <div key={job.id} className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-orange-500 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h2 className="text-white font-bold text-lg">{job.company}</h2>
                                <p className="text-gray-400 text-sm">{job.role}</p>
                            </div>
                            <select
                                value={job.status}
                                onChange={(e) => handleUpdate(job.id, { status: e.target.value })}
                                className="text-xs bg-gray-800 text-orange-400 px-2 py-1 rounded-lg border border-gray-700">
                                <option value="no_response">No Response</option>
                                <option value="reverted">Reverted</option>
                                <option value="rejected">Rejected</option>
                                <option value="assessment">Assessment Done</option>
                                <option value="interview_shortlisted">Interview Shortlisted</option>
                                <option value="interview_done">Interview Done</option>
                                <option value="offer_received">Offer Received</option>
                                <option value="withdrawn">Withdrawn</option>
                            </select>
                        </div>
                        <p className="text-gray-500 text-xs mt-2">Skills: {job.skills_required}</p>
                        <p className="text-gray-500 text-xs">Date: {job.date}</p>
                        {job.notes && <p className="text-gray-400 text-sm mt-2">{job.notes}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobsPage