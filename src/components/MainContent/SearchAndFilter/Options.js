import React, { useContext } from 'react'
import styled from 'styled-components'
import {FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope} from 'react-icons/fa'
import {GiEarthAsiaOceania, GiWorld} from 'react-icons/gi'
import Option from './Option'
import { ThemeContext } from '../../ThemeContext/ThemeContext'

const OptionsPane = styled.ul`
  position: absolute;
  width: 100%;
  margin-top: 2px;
  box-shadow: var(--boxShadow);
  border-radius: 4px;
  overflow: hidden;
  z-index: 10;
`
const listRegion = [
  {
    icon:<GiWorld/>,
    value:"All"
  },
  {
    icon:<FaGlobeAfrica/>,
    value:"Africa"
  },
  {
    icon:<FaGlobeAmericas/>,
    value:"Americas"
  },
  {
    icon:<FaGlobeAsia/>,
    value:"Asia"
  },
  {
    icon:<FaGlobeEurope/>,
    value:"Europe"
  }
  ,{
    icon:<GiEarthAsiaOceania/>,
    value:"Oceania"
  }
]
const Options = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <OptionsPane className={theme}>
        {
          listRegion.map((region,index)=>(
            <Option key={index} region={region}/>
          ))
        }
    </OptionsPane>
  )
}

export default Options