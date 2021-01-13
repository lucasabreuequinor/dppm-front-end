import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsCostPerYearYear3TotalStyled = styled.input`


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
const BCItemsCostPerYearYear3Total = () => {

  const dispatch = useDispatch();

  const costItemsYear3Total  = parseFloat(useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)
                                   .reduce((sum, currItem) => sum + (currItem.year3 ? parseFloat(currItem.year3): 0), 0)).toFixed(2)

  return <BCItemsCostPerYearYear3TotalStyled
            type="number"
            step="any"
            readOnly
            value={costItemsYear3Total ? costItemsYear3Total : ""}
          />

}

export default BCItemsCostPerYearYear3Total