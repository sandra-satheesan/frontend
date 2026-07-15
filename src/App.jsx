import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobsPage from './pages/JobsPage';
import LeetcodePage from './pages/LeetcodePage';
import GymPage from './pages/GymPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar'

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen bg-gray-950 text-white">
                <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col p-6">
                    <Navbar />
                </div>
                <div className="flex-1 overflow-y-auto p-8">
                    <Routes>
                        <Route path="/jobs" element={<JobsPage />} />
                        <Route path="/leetcode" element={<LeetcodePage />} />
                        <Route path="/gym" element={<GymPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;