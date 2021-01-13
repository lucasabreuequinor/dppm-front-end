import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeSavingItemYear5 } from '../../actions/business_case_items';

const BCItemsSavingPerYearItemYear5Styled = styled.input`


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
const BCItemsSavingPerYearItemYear5 = ({savingItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsSavingPerYearItemYear5Styled
            className={className}
            type="number"
            step="any"
            key={savingItem.id}  
            style={{
                    backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={savingItem.year5}
            onChange={(e) => dispatch(changeSavingItemYear5({id: savingItem.id, year5:parseFloat(e.target.value)})) }
          />

}

export default BCItemsSavingPerYearItemYear5