import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeOperationalRunbookFollowUp } from '../../actions/solution_and_data';


const SADOperationalRunbookFollowUpInputStyled = styled.input`

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
const SADOperationalRunbookFollowUpInput = () => {
  const operationalRunbookFollowUp = useSelector(state => state.sadReducers.sadOperationalRunbookFollowUp);
  const dispatch = useDispatch();

  return <SADOperationalRunbookFollowUpInputStyled
            value={operationalRunbookFollowUp}
            onChange={(e) => dispatch(changeOperationalRunbookFollowUp(e.target.value)) }
          />

}

export default SADOperationalRunbookFollowUpInput
