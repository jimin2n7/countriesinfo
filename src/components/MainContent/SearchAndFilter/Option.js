import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const OptionItem = styled.li`
    height: 30px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span{
      margin-left: 4px;
    }
    &:hover{
      background-color: var(--selectOptionBackGround);
      span{
        font-weight: 600;
      }
    }
`

const Option = ({region}) => {
    const navigate = useNavigate()
    const handleValueOption = () =>{
        if(region.value!="All"){
            navigate(`/region/${region.value}`)
        }else{
            navigate('/')
        }
    }
  return (
    <OptionItem onClick={handleValueOption}>
        {region.icon}
        <span>{region.value}</span>
    </OptionItem>
  )
}

export default Option