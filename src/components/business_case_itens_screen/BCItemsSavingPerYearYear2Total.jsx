import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsSavingPerYearYear2TotalStyled = styled.input`


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
const BCItemsSavingPerYearYear2Total = () => {

  const dispatch = useDispatch();

  const savingItemsYear2Total  = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                                   .reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  return <BCItemsSavingPerYearYear2TotalStyled
            type="number"
            min="0"
            readOnly
            value={savingItemsYear2Total ? savingItemsYear2Total: ""}
          />

}

export default BCItemsSavingPerYearYear2Total