import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeCostItemBaseline } from '../../actions/business_case_items';

const BCItemsCostPerYearItemBaselineStyled = styled.input`


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
const BCItemsCostPerYearItemBaseline = ({costItem}) => {
  const dispatch = useDispatch();

  return <BCItemsCostPerYearItemBaselineStyled
            type="number"
            min="0"
            key={costItem.id}
            style={{
                    backgroundColor: costItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={costItem.baseline}
            onChange={(e) => dispatch(changeCostItemBaseline({id: costItem.id, baseline:parseInt(e.target.value)})) }
            />

}

export default BCItemsCostPerYearItemBaseline

