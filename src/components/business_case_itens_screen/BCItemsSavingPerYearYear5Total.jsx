import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearYear5TotalStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  padding-bottom: 0;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;
  text-align: center;
  border-bottom: 0.1rem solid #808080;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const BCItemsSavingPerYearYear5Total = () => {

  const dispatch = useDispatch();

  const savingItemsYear5Total  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.year5 ? parseFloat(currItem.year5): 0), 0)

  return <BCItemsSavingPerYearYear5TotalStyled
            type="number"
            min="0"
            readOnly
            value={savingItemsYear5Total ? savingItemsYear5Total: ""}
          />

}

export default BCItemsSavingPerYearYear5Total