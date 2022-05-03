import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CountryInfoDetail.module.scss'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import axios from 'axios'

const getLanguages = (country) =>{
    let result =''
    country.languages.forEach(languages =>{
        if(result !== '') result = result + ' - ' + languages.name
        else result += languages.name
    } )
    return result
}

const getCountryNameByCode = async (code) =>{
    const result = await axios.get(`https://restcountries.com/v2/alpha/${code}`)
    return result.data
}

const CountryInfoDetail = (props) => {
    const {country} = props
    const {theme} = useContext(ThemeContext)
    const [borders, setBorders] = useState([])

    useEffect(()=>{
        if(country&&country.borders&&Object.keys(country).length!=0 && Object.keys(country.borders).length!=0){
            country.borders.forEach((country)=>{
                getCountryNameByCode(country)
                .then(res => setBorders(prev => [...prev, res.name]))
            })
        }
    }, [Object.keys(country).length])
  return (
    <div className={styles.countryInfoDetail}>
        {
            Object.keys(country).length!=0&&(
                <>
                    <h3 className={styles.countryName}>{country.name}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.countryInfo__title}>Native Name</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.nativeName}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Official</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.altSpellings[1]}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Population</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{new Intl.NumberFormat().format(country.population)}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Region</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.region}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Sub Region</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.subregion}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Capital</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.capital}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Top Level Domain</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.topLevelDomain}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Currencies</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{country.currencies[0].code} - {country.currencies[0].name}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Languages</td>
                                <td>:</td>
                                <td className={styles.countryInfo__value}>{getLanguages(country)}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfo__title}>Border Countries</td>
                                <td>:</td>
                                <td className={styles.borderList}>
                                    {
                                        borders.length>0? borders.map((border,index)=>(
                                            <span key={index}>
                                                <div  className={`${styles.borderItem} ${theme}`}>{border}</div>
                                            </span>
                                        ))
                                        : 'No infomation'
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )
        }
        
    </div>
  )
}

export default CountryInfoDetail