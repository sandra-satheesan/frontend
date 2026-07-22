import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobsPage from './pages/JobsPage';
import LeetcodePage from './pages/LeetcodePage';
import GymPage from './pages/GymPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={
                    <div className="flex h-screen bg-gray-950 text-white">
                        <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col p-6">
                            <h1 className="text-orange-500 font-bold text-xl mb-10">My OS</h1>
                            <Navbar />
                        </div>
                        <div className="flex-1 overflow-y-auto p-8">
                            <Routes>
                                <Route path="/jobs" element={<ProtectedRoute><JobsPage /></ProtectedRoute>} />

                                <Route path="/leetcode" element={<ProtectedRoute><LeetcodePage /></ProtectedRoute>} />

                                <Route path="/gym" element={<ProtectedRoute><GymPage /></ProtectedRoute>} />

                                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                            </Routes>
                        </div>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;