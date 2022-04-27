import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SwitchMode from './SwitchMode'
import { ThemeContext } from './ThemeContext/ThemeContext'

const HeaderPane = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: 0 0 40px 10px rgba(0,0,0,0.2);
    z-index: 10;
    span{
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 3px rgba(0,0,0,0.3);
    }
`

const Header = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <HeaderPane className={theme}>
      <Link to={'/'}>
        <span>Where in the world?</span>
      </Link>
        <SwitchMode/>
    </HeaderPane>
  )
}

export default Header