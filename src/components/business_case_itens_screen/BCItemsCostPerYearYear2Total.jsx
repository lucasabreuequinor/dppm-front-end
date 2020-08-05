import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const BCItemsCostPerYearYear2TotalStyled = styled.input`


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
const BCItemsCostPerYearYear2Total = () => {

  const dispatch = useDispatch();

  const costItemsYear2Total  = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)
                                   .reduce((sum, currItem) => sum + (currItem.year2 ? parseFloat(currItem.year2): 0), 0)

  return <BCItemsCostPerYearYear2TotalStyled
            type="number"
            min="0"
            readOnly
            value={costItemsYear2Total ? costItemsYear2Total: ""}
          />

}

export default BCItemsCostPerYearYear2Total