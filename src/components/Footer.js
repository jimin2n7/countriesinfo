import React,{useContext} from 'react'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext/ThemeContext'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <FooterContainer className={theme}>
        <h4>Copyright &copy; nguyenchiminh </h4>
    </FooterContainer>
  )
}
const FooterContainer = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`
export default Footer