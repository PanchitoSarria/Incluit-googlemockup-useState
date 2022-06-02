import { useState } from 'react';
import Button from './components/Button';
import Icon from './components/Icon';
import Switch from './components/Switch';
import './App.css';
import googlelogo from './images/google-logo.png'
import googleMic from './images/google-mic.png'
import lupa from './images/lupa.png'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const lang = window.location.pathname

  const searchBar = document.getElementById('searchBar')

  const changeDarkMode = (checked) => {
    if(checked){
      setDarkMode(true)
    } if(!checked){
      setDarkMode(false)
    }
  }

  return (
    <>
      <div className={`App ${darkMode ? 'DarkMode' : ''}`}>
        <Switch changeDarkMode={changeDarkMode}/>
        <section className='App_content'>
          <div className='logo_wpr'>
            <img src={googlelogo} alt="" />
            <span>
              {lang === '/es' ? 'España' : lang === '/ar' ? 'Argentina' : 'Global!'}
            </span>
          </div>
          <div>
            <form action="">

              <div className='search_wpr'>
                <input type="text" className='search_field' id='searchBar'/>
                <Icon imgSrc={googleMic} iconStyling='icon--right'/>
                <Icon imgSrc={lupa} iconStyling='icon--left'/>
              </div>
              <div>
                <Button title='Buscar en Google'/>
                <Button title='Me siento con suerte'/>
              </div>
              <p>Ofrecido por Google en: {lang === '/es' ? <span>español</span> : lang === '/ar' ? <span>español argentino</span> : <span>Global!</span>}</p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;