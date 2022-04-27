import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'
import ScrollBar from 'react-perfect-scrollbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import BarLoader from '../../Loading/BarLoader'

const CountriesContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
    padding: 4px 1px;

    @media screen and (max-width: 1023px){
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
    }

    @media screen and (max-width: 767px){
        grid-template-columns: repeat(2,1fr);
        gap: 8px;
    }

    @media screen and (max-width: 679px){
        grid-template-columns: repeat(1,auto);
    }
`
const Countries = () => {
    const [contriesInfo, SetContriesInfo] = useState([])
    const slug = useParams()
    const {loading, setLoading} = useContext(ThemeContext)
    useEffect(()=>{
        if(slug.regionName){
            const getCountryByRegion = async () =>{
                setLoading(false)
                await axios.get(`https://restcountries.com/v3.1/region/${slug.regionName}`)
                .then(res => SetContriesInfo(res.data))
                .catch(err => console.log('Get countries all error: ', err))
            }
            getCountryByRegion()
        }else if(slug.nameValue){
            const getCountryByNameValue = async () =>{
                setLoading(false)
                await axios.get(`https://restcountries.com/v3.1/name/${slug.nameValue}`)
                .then(res => SetContriesInfo(res.data))
                .catch(err => console.log('Get countries all error: ', err))
            }
            getCountryByNameValue()
        }
        else{
            const getCountryAll = async () =>{
                setLoading(false)
                await axios.get('https://restcountries.com/v3.1/all')
                .then(res => SetContriesInfo(res.data))
                .catch(err => console.log('Get countries all error: ', err))
            }
            getCountryAll()
        }
    }, [slug])

  return (
      <>
        {
            loading?(<BarLoader speed={10} customText={"Loading..."}/>):(
            <ScrollBar style={{maxHeight:'65vh',overflow:"hidden"}}>
                <CountriesContainer>
                    {
                        contriesInfo.map((country, index) => (
                            <CountryCard key={index} 
                            name = {country.name.common} 
                            population = {country.population} 
                            region ={country.region} 
                            capital ={country.capital} 
                            flags ={country.flags.svg}/>
                        ))
                    }
                </CountriesContainer>
            </ScrollBar>)
        }
      </>
  )
}

export default Countries