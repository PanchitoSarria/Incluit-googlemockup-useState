import { useRef } from 'react'
import './switch.css'

const Switch = ({changeDarkMode}) => {
    const switchRef = useRef(null)
    // console.log(switchRef.current.checked)
    
  return (
    <div className="toggle-wrapper">
      <div className="toggle transparent">
        <input id="transparent" type="checkbox" className='switchInput' ref={switchRef} onClick={() => changeDarkMode(switchRef.current.checked)}/>
        <label className="toggle-item" htmlFor="transparent"></label>
      </div>
    </div>
  )
}

export default Switch