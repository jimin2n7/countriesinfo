import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import BarLoader from '../../Loading/BarLoader'
import ScrollBar from 'react-perfect-scrollbar'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import CountryInfoDetail from './CountryInfoDetail'

const CountryDetail = () => {
    const {theme} = useContext(ThemeContext)
    const slug = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState({})
    const {loading, setLoading} = useContext(ThemeContext)

    useEffect(()=>{
        const getCountryByName = async() =>{
            setLoading(false)
            await axios.get(`https://restcountries.com/v2/name/${slug.countryName}`)
            .then(res => {
                setCountry(res.data[0])
            })
            .catch(err => console.log('error',err))
        }
        getCountryByName()
    },[slug])

  return (
    <Wrapper>
        <div className={`goback-btn ${theme}`} onClick={()=>navigate(-1)}><span>Go back</span></div>
        {
            loading?(<BarLoader customText={"Loading..."}/>):(
                <CountryContainer>
                    <img className='flagCountry' src={country.flag} alt="" />
                    <ScrollBar style={{maxHeight:'65vh',overflow:"hidden"}}>
                        <CountryInfoDetail country = {country}/>
                    </ScrollBar>
                </CountryContainer>
            )
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding-top: 20px;
    .goback-btn{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        opacity: 0.7;
        transition: all 0.2s linear;
        &:hover{
            opacity: 1;
            box-shadow: var(--boxShadow);
            cursor: pointer;
            user-select: none;
        }
    }
`

const CountryContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media only screen and (max-width: 799px){
        flex-direction: column;
        align-items: center;
    }

    .flagCountry{
        width: 50%;
        height: 50%;
        margin-bottom: 12px;
        box-shadow: var(--boxShadow);
        @media only screen and (max-width: 799px){
            width: 100%;
        }
    }
`

export default CountryDetail