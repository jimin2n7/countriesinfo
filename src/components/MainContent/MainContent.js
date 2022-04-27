import React from 'react'
import BarLoader from '../Loading/BarLoader'
import Countries from './Countries/Countries'
import SearchAndFilter from './SearchAndFilter/SearchAndFilter'

const MainContent = () => {
  return (
    <div>
        <SearchAndFilter/>
        <Countries/>
    </div>
  )
}

export default MainContent