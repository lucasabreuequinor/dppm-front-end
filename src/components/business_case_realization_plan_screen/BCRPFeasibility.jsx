import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeDriverItemFeasibility } from '../../actions/business_case_items';

const BCRPFeasibilityStyled = styled.textarea.attrs({
  rows: 6
})`

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
const BCRPFeasibility = ({driverItem}) => {
  const dispatch = useDispatch();

  return <BCRPFeasibilityStyled
            type="text"
            key={driverItem.id}
            style={{
                    backgroundColor: driverItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={driverItem.feasibility}
            onChange={(e) => dispatch(changeDriverItemFeasibility({id: driverItem.id, feasibility:e.target.value})) }
            />

}

export default BCRPFeasibility

