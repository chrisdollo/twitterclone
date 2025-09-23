import './App.css'

import Top from './components/Top/Top.jsx'
import Feed from './components/Feed/Feed.jsx'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Router>
          <nav>
            <Link to="/">Page 1</Link>
            <Link to="/page2">Page 2</Link>
          </nav>

          <Routes>
            <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/page2" element={<LogInPage></LogInPage>}></Route>
          </Routes>
        </Router>


      </div>
    </>
  )
}

export default App
