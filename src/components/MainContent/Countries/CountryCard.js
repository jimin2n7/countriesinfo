import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {ThemeContext} from '../../ThemeContext/ThemeContext'

const CountryItem = styled.div`
    max-width: 420px;
    width: 100%;
    filter: brightness(1);
    box-shadow: var(--boxShadow);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;
    user-select: none;
    cursor: pointer;
    .country__img{
        height: 160px;
        box-shadow: var(--boxShadow);
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s linear;
        }
    }
    &:hover{
        filter: brightness(0.9);
        img{
            transform: scale(1.1);
        }
    }
`

const CountryInfo = styled.div`
    padding: 10px 16px;
    h3{
        margin-bottom: 20px;
        font-size: 18px;
    }
    p{
        font-size: 15px;
        font-weight: 500;
        span{
            font-weight: 300;
            font-size: 13px;
            margin-left: 3px;
        }
    }
    p:not(:last-child){
        margin-bottom: 5px;
    }
`

const CountryCard = (props) => {
    const country = {
        "name" : props.name, 
        "population": Number(props.population), 
        "region": props.region, 
        "capital": props.capital, 
        "flags": props.flags}

    const {theme} = useContext(ThemeContext)
    
    const nagvigate = useNavigate()

    const handleClick = ()=>{
        nagvigate(`/country/${country.name}`)
    }
  return (
    <CountryItem className={theme} onClick={handleClick}>
        <div className='country__img'>
            <img src={country.flags} alt="" />
        </div>
        <CountryInfo>
            <h3>{country.name}</h3>
            <p>Population:<span>{country.population}</span></p>
            <p>Region:<span>{country.region}</span></p>
            <p>Capital:<span>{country.capital}</span></p>
        </CountryInfo>
    </CountryItem>
  )
}

export default CountryCard