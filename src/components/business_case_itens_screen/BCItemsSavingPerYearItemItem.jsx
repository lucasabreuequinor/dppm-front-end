import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeSavingItemItem } from '../../actions/business_case_items';

const BCItemsSavingPerYearItemItemStyled = styled.input`


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
const BCItemsSavingPerYearItemItem = ({savingItem, className}) => {
  const dispatch = useDispatch();

  return <BCItemsSavingPerYearItemItemStyled
            className={className}
            type="text"
            key={savingItem.id}
            style={{
                    backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={savingItem.item}
            onChange={(e) => dispatch(changeSavingItemItem({id: savingItem.id, item:e.target.value})) }
            />

}

export default BCItemsSavingPerYearItemItem

