import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemYear4 } from '../../actions/business_case_items';

const BCItemsCostPerYearItemYear4Styled = styled.input`


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
const BCItemsCostPerYearItemYear4 = ({costItem}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemYear4Styled
            data-html2canvas-ignore
            type="number"
            min="0"
            key={costItem.id}  
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.year4}
            onChange={(e) => dispatch(changeCostItemYear4({id: costItem.id, year4:parseInt(e.target.value)})) }
          />

}

export default BCItemsCostPerYearItemYear4