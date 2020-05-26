import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeArchContractStatus } from '../../actions/solution_and_data';

const SADArchContractStatusInputStyled = styled.input`

  border: 1px solid #707070;
  width:100%;
  padding-top: .5em;
  padding: .5em;
  border-radius: .2em;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;  

  resize: none;
}
`
const SADArchContractStatusInput = () => {
  const archContractStatus = useSelector(state => state.sadReducers.sadArchContractStatus);
  const dispatch = useDispatch();

  return <SADArchContractStatusInputStyled
            value={archContractStatus}
            onChange={(e) => dispatch(changeArchContractStatus(e.target.value)) }
          />

}

export default SADArchContractStatusInput
