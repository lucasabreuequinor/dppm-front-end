import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemAssumptionsComments } from '../../actions/business_case_items';

const BCItemsCostPerYearItemAssumptionsCommentsStyled = styled.input`


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
const BCItemsCostPerYearItemAssumptionsComments = ({costItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemAssumptionsCommentsStyled
            className={className}
            type="text"
            key={costItem.id}
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.assumptionsComments}
            onChange={(e) => dispatch(changeCostItemAssumptionsComments({id: costItem.id, assumptionsComments:e.target.value})) }
            />

}

export default BCItemsCostPerYearItemAssumptionsComments

