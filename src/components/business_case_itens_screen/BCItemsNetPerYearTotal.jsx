import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const BCItemsNetPerYearTotalStyled = styled.input`


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
  border-bottom: 0.1rem solid #808080;
  text-align:center;  

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const BCItemsNetPerYearTotal = () => {

  const savingItems = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)

  


  const savingItemsTotal = savingItems.reduce((sum, item) => {
                                          return (
                                              sum + 
                                              (item.baseline ? parseFloat(item.baseline): 0) +
                                              (item.year1 ? parseFloat(item.year1): 0) + 
                                              (item.year2 ? parseFloat(item.year2): 0) + 
                                              (item.year3 ? parseFloat(item.year3): 0) + 
                                              (item.year4 ? parseFloat(item.year4): 0) + 
                                              (item.year5 ? parseFloat(item.year5): 0) 
                                            ) 
                                          } 
                                        , 0)
  
  const costItems = useSelector(state => state.bciReducers.bciItems.bciCostItems.costItems)

  


  const costItemsTotal = costItems.reduce((sum, item) => {
                                          return (
                                              sum + 
                                              (item.baseline ? parseFloat(item.baseline): 0) +
                                              (item.year1 ? parseFloat(item.year1): 0) + 
                                              (item.year2 ? parseFloat(item.year2): 0) + 
                                              (item.year3 ? parseFloat(item.year3): 0) + 
                                              (item.year4 ? parseFloat(item.year4): 0) + 
                                              (item.year5 ? parseFloat(item.year5): 0) 
                                            ) 
                                          } 
                                        , 0)

  const netPerYearTotal = savingItemsTotal - costItemsTotal
  return <BCItemsNetPerYearTotalStyled
            type="number"
            min="0"
            readOnly
            value={ (savingItems.length || costItems.length) ? netPerYearTotal: ""}
          />

}

export default BCItemsNetPerYearTotal