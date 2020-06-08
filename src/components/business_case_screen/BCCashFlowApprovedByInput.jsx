import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeApprovedBy } from '../../actions/business_case';

const BCCashFlowApprovedByInputStyled = styled.input`

  border: 1px solid #707070;
  width:100%;
  padding-top: .5rem;
  padding: .5rem;
  border-radius: .2rem;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;  

  resize: none;
}
`
const BCCashFlowApprovedByInput = () => {
  const approvedBy = useSelector(state => state.bcReducers.bcApprovedBy);
  const dispatch = useDispatch();

  return <BCCashFlowApprovedByInputStyled
            value={approvedBy}
            onChange={(e) => dispatch(changeApprovedBy(e.target.value)) }
          />

}

export default BCCashFlowApprovedByInput
