import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobsPage from './pages/JobsPage';
import LeetcodePage from './pages/LeetcodePage';
import GymPage from './pages/GymPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/leetcode" element={<LeetcodePage />} />
                <Route path="/gym" element={<GymPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;