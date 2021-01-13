import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeStartDate } from '../../actions/resource_plan';

const RPResourceItemStartDateStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const RPResourceItemStartDate = ({resource}) => {
  const dispatch = useDispatch();

  return <RPResourceItemStartDateStyled
            type="date"
            key={resource.id}
            onKeyDown={(e) => e.preventDefault()}
            style={{
                    backgroundColor: resource.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={resource.start_date}
            onChange={(e) => dispatch(changeStartDate({id: resource.id, start_date:e.target.value})) }
            />

}

export default RPResourceItemStartDate

