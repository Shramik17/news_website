
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Newsfeed from './Components/Navbar/NewsFeed/Newsfeed'
import { NewsProvider } from './Context/Context'

function App() {
  
  return (
    <>
      <NewsProvider>
        <div className="app">
          <Navbar/>
          <Newsfeed/>
        </div>
      </NewsProvider>
    </>
  )
}

export default App