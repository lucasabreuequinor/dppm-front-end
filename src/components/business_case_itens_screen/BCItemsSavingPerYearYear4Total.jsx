import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearYear4TotalStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  padding-bottom: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
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
const BCItemsSavingPerYearYear4Total = () => {

  const dispatch = useDispatch();

  const savingItemsYear4Total  = parseFloat(useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.year4 ? parseFloat(currItem.year4): 0), 0)).toFixed(2)

  return <BCItemsSavingPerYearYear4TotalStyled
            type="number"
            step="any"
            readOnly
            value={savingItemsYear4Total ? savingItemsYear4Total: ""}
          />

}

export default BCItemsSavingPerYearYear4Total