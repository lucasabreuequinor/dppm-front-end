import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProductionItemYear1 } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemYear1Styled = styled.input`


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
const BCItemsProductionPerYearItemYear1 = ({productionItem}) => {
  const dispatch = useDispatch();

  return <BCItemsProductionPerYearItemYear1Styled
            type="number"
            min="0"
            key={productionItem.id}  
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={productionItem.year1}
            onChange={(e) => dispatch(changeProductionItemYear1({id: productionItem.id, year1:parseInt(e.target.value)})) }
          />

}

export default BCItemsProductionPerYearItemYear1