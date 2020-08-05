import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProductionItemBaseline } from '../../actions/business_case_items';

const BCItemsProductionPerYearItemBaselineStyled = styled.input`


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
const BCItemsProductionPerYearItemBaseline = ({productionItem}) => {
  const dispatch = useDispatch();

  return <BCItemsProductionPerYearItemBaselineStyled
            data-html2canvas-ignore
            type="number"
            min="0"
            key={productionItem.id}
            style={{
                    backgroundColor: productionItem.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={productionItem.baseline}
            onChange={(e) => dispatch(changeProductionItemBaseline({id: productionItem.id, baseline:parseInt(e.target.value)})) }
            />

}

export default BCItemsProductionPerYearItemBaseline

