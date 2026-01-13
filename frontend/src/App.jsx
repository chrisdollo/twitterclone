import './App.css'

import Top from './components/Top/Top.jsx'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeUserPage from './components/Pages/WelcomeUserPage/WecomeUserPage';
import LogInPage from './components/Pages/LogInPage/LogInPage';
import SignUpPage from './components/Pages/SIgnUpPage/SignUpPage';
import Feed from './components/Feed/Feed.jsx'



function App() {
  return (
    <Router>
      <div>
        <Top />
        <Routes>
          <Route path="/" element={<WelcomeUserPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
