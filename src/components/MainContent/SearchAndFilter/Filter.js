import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {FaChevronDown} from 'react-icons/fa'
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import Options from './Options'
import { useParams } from 'react-router-dom';

const FilterPane = styled.div`
  max-width: 160px;
  width: 100%;
  h3{
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--textShadow);
  }
`

const SelectionPane = styled.div`
  width: 100%;
  margin-top: 5px;
  position: relative;
`

const Select = styled.div`
  box-shadow: var(--boxShadow);
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 30px;
  user-select: none;
  cursor: pointer;
`

const Filter = () => {
  const {theme} = useContext(ThemeContext)
  const refSelect = useRef()
  const [isShowSelection, setShowSelection] = useState(false)
  const {regionName} = useParams()
  const [valueOption, setValueOption] = useState('All')

  const handleOptions = (e) =>{
    if(refSelect.current){
      setShowSelection(refSelect.current.contains(e.target))
    }
  }

  useEffect(()=>{
    if(isShowSelection){
      document.addEventListener('click',handleOptions)
    }
    return ()=>{
      document.removeEventListener('click',handleOptions)
    }
  },[isShowSelection])
  
  useEffect(()=>{
    if(regionName){
      setValueOption(regionName)
    }else{
      setValueOption('All')
    }
  },[regionName])
 
  return (
    <FilterPane>
        <h3>Filter By Regions:</h3>
        <SelectionPane>
          <Select className={theme} 
          ref={refSelect}
          onClick={handleOptions}>
            <span>{valueOption}</span>
            <FaChevronDown/>
          </Select>
          {
            isShowSelection?<Options/>:''
          }
        </SelectionPane>
    </FilterPane>
  )
}

export default Filter