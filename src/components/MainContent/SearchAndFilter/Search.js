import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContext/ThemeContext'

const SearchPane = styled.div`
  max-width: 320px;
  width: 100%;
  h3{
    font-size: 18px;
    font-weight:600;
    text-shadow: var(--textShadow);
  }
`
const SeacrchInput = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  width: 100%; 
  height: 30px;
  box-shadow: var(--boxShadow);
  border-radius: 4px;
  overflow: hidden;
  input{
    height: 100%;
    width: 100%;
    padding: 10px;
  }
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30px;
    cursor: pointer;
    background-color: #aaa;
    opacity: 0.7;
    transition: all 0.2s linear;
    &:hover{
      opacity: 1;
    }
  }
`

const Search = () => {
  const {theme} = useContext(ThemeContext)
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const onKeyDown = (e) =>{
    if(e.keyCode===13){
       inputValue ==''? navigate('/') : navigate(`/search/${inputValue}`)
    }
  }

  return (
    <SearchPane>
        <h3>Search Country:</h3>
        <SeacrchInput>
            <input 
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown = {onKeyDown}
            placeholder='Enter the country...' 
            type="text" 
            className={theme}/>
            <div className="icon">
              <Link to= { inputValue ==''?'/':`/search/${inputValue}`}>
                <FiSearch/>
              </Link>
            </div>
        </SeacrchInput>
    </SearchPane>
  )
}

export default Search