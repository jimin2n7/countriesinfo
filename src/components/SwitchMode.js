import React, { useContext, useEffect, useRef, useState } from 'react'
import {RiMoonFill, RiSunFill} from 'react-icons/ri'
import styles from './SwitchStyles.module.scss'
import { ThemeContext } from './ThemeContext/ThemeContext'

const SwitchMode = () => {
    const {toggleTheme} = useContext(ThemeContext)
    const refInput = useRef()
    const refToggle = useRef()
    const refCircle = useRef()
    const [isDark, setDark] = useState(false)

    useEffect(()=>{
        refInput.current.checked = isDark;
    },[isDark])

    const handleToggle = () =>{
        refInput.current.checked = !refInput.current.checked
        setDark(refInput.current.checked)
        toggleTheme()
    }

    useEffect(()=>{
        const changeBackGroundButton = ()=>{
            if(isDark){
                refCircle.current.style.background = "#222"
                refToggle.current.style.background = "#fff"
            }else{
                refCircle.current.style.background = "#fff"
                refToggle.current.style.background = "var(--toggleButtonColor)"
            }
        }
        changeBackGroundButton()
    },[isDark])

  return (
    <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
        <input type="checkbox" className={styles.input} ref={refInput} />
        <div className={styles.icon}>
            {isDark?<RiMoonFill/>:<RiSunFill/>} 
        </div>
        <div className={styles.circle} ref={refCircle}></div>
    </div>
  )
}

export default SwitchMode