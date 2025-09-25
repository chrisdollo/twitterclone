import './App.css'

import Top from './components/Top/Top.jsx'
import WelcomeUserPage from './components/Pages/WelcomeUserPage/WecomeUserPage';
import Feed from './components/Feed/Feed.jsx'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Top></Top>
        <WelcomeUserPage></WelcomeUserPage>
      </div>
    </>
  )
}

export default App
