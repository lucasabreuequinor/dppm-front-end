import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemYear1 } from '../../actions/business_case_items';

const BCItemsCostPerYearItemYear1Styled = styled.input`


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
const BCItemsCostPerYearItemYear1 = ({costItem}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemYear1Styled
            data-html2canvas-ignore
            type="number"
            min="0"
            key={costItem.id}  
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.year1}
            onChange={(e) => dispatch(changeCostItemYear1({id: costItem.id, year1:parseInt(e.target.value)})) }
          />

}

export default BCItemsCostPerYearItemYear1