import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeSavingItemBaseline } from '../../actions/business_case_items';

const BCItemsSavingPerYearItemBaselineStyled = styled.input`


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
const BCItemsSavingPerYearItemBaseline = ({savingItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsSavingPerYearItemBaselineStyled
            className={className}
            type="number"
            min="0"
            key={savingItem.id}
            style={{
                    backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={savingItem.baseline}
            onChange={(e) => dispatch(changeSavingItemBaseline({id: savingItem.id, baseline:parseInt(e.target.value)})) }
            />

}

export default BCItemsSavingPerYearItemBaseline

