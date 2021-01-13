import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeSavingItemTotal } from '../../actions/business_case_items';

const BCItemsSavingPerYearItemTotalStyled = styled.input`


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
const BCItemsSavingPerYearItemTotal = ({savingItem, className}) => {

  const dispatch = useDispatch();

  const currentSavingItem = useSelector(state => state.bciReducers.bciItems.bciSavingItems.savingItems)
                            .filter(currentItem  => currentItem.id  == savingItem.id )[0]
                        
  const currentSavingItemNewTotal = parseFloat(Object.keys(currentSavingItem)
                                          .filter(key => {
                                              return (
                                                  key!='id' && 
                                                  key!='item' && 
                                                  key!='total' &&
                                                  key!='assumptionsComments'
                                                )
                                              }  
                                            )
                                          .reduce((sum,key) => sum + (currentSavingItem[key] ? parseFloat(currentSavingItem[key]): 0) , 0)).toFixed(2)

  return <BCItemsSavingPerYearItemTotalStyled
            className={className}
            type="number"
            step="any"
            key={savingItem.id}  
            readOnly
            style={{
                    backgroundColor: savingItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={currentSavingItemNewTotal}
            // onChange={(e) => dispatch(changeSavingItemTotal({id: savingItem.id, total:parseInt(e.target.value ? e.target.value: 0)})) }
          />

}

export default BCItemsSavingPerYearItemTotal