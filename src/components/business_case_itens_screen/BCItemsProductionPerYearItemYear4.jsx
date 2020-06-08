import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProductionItemYear4 } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemYear4Styled = styled.input`


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
const BCItemsProductionPerYearItemYear4 = ({productionItem}) => {
  const dispatch = useDispatch();

  return <BCItemsProductionPerYearItemYear4Styled
            type="number"
            min="0"
            key={productionItem.id}  
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={productionItem.year4}
            onChange={(e) => dispatch(changeProductionItemYear4({id: productionItem.id, year4:parseInt(e.target.value)})) }
          />

}

export default BCItemsProductionPerYearItemYear4