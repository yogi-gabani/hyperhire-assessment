import BackImage from './assets/back.png';
import BellImage from './assets/bell.png';
import './App.css';
import Post from './components/Post';

function App() {

  return (
    <>
      <nav className="navbar">
        <button><img className="back" src={BackImage} /></button>
        <div className="header">자유톡</div>
        <button><img className="notification" src={BellImage} /></button>
      </nav>

      <div className="main">
        <Post />
      </div>
    </>
  )
}

export default App
