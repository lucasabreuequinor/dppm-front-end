import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemCostType } from '../../actions/business_case_items';

const BCItemsCostPerYearItemTypeStyled = styled.input`


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
const BCItemsCostPerYearItemType = ({costItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemTypeStyled
            className={className}
            type="text"
            key={costItem.id}
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.cost_type}
            onChange={(e) => dispatch(changeCostItemCostType({id: costItem.id, cost_type:e.target.value})) }
            />

}

export default BCItemsCostPerYearItemType

