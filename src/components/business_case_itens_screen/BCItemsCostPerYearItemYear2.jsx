import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemYear2 } from '../../actions/business_case_items';

const BCItemsCostPerYearItemYear2Styled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis; 
  text-align: center; 

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const BCItemsCostPerYearItemYear2 = ({costItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemYear2Styled
            className={className}
            type="number"
            step="any"
            key={costItem.id}  
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.year2}
            onChange={(e) => dispatch(changeCostItemYear2({id: costItem.id, year2:parseFloat(e.target.value)})) }
          />

}

export default BCItemsCostPerYearItemYear2