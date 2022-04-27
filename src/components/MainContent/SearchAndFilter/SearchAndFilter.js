import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Filter from './Filter'

const SearchAndFilterPane = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const SearchAndFilter = () => {
  return (
    <SearchAndFilterPane>
        <Search/>
        <Filter/>
    </SearchAndFilterPane>
  )
}

export default SearchAndFilter