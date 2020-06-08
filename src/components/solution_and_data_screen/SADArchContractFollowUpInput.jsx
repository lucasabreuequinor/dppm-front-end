import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeArchContractFollowUp } from '../../actions/solution_and_data';

const SADArchContractFollowUpInputStyled = styled.input`

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
const SADArchContractFollowUpInput = () => {
  const archContractFollowUp = useSelector(state => state.sadReducers.sadArchContractFollowUp);
  const dispatch = useDispatch();

  return <SADArchContractFollowUpInputStyled
            value={archContractFollowUp}
            onChange={(e) => dispatch(changeArchContractFollowUp(e.target.value)) }
          />

}

export default SADArchContractFollowUpInput
