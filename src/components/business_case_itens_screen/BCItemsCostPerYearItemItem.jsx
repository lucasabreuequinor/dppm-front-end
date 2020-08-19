import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemItem } from '../../actions/business_case_items';

const BCItemsCostPerYearItemItemStyled = styled.input`


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
const BCItemsCostPerYearItemItem = ({costItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemItemStyled
            className={className}
            type="text"
            key={costItem.id}
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.item}
            onChange={(e) => dispatch(changeCostItemItem({id: costItem.id, item:e.target.value})) }
            />

}

export default BCItemsCostPerYearItemItem

