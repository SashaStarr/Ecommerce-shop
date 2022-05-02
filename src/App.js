import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import MainPage from './components/screens/mainPage/MainPage';
import Header from './components/header/Header'

function App() {
  //Theme
  const [theme, setTheme] = useState(localStorage.getItem('thema'));
  const swapTheme = () => {
    if (theme) {
      localStorage.removeItem('thema')
    } else {
      localStorage.setItem('thema', true)
    }
    setTheme(!theme)
  }
  const those = theme ? 'grid-container active-those' : 'grid-container'


  return (
    <Router>
      <div className={those}>
        <Header swapTheme={swapTheme} theme={theme}></Header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage theme={theme} />} />
          </Routes>
        </main>
        <footer className='footer'>
          All right reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
