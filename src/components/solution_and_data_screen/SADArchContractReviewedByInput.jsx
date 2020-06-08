import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeArchContractReviewedBy } from '../../actions/solution_and_data';

const SADArchContractReviewedByInputStyled = styled.input`

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
const SADArchContractReviewedByInput = () => {
  const archContractReviewedBy = useSelector(state => state.sadReducers.sadArchContractReviewedBy);
  const dispatch = useDispatch();

  return <SADArchContractReviewedByInputStyled
            value={archContractReviewedBy}
            onChange={(e) => dispatch(changeArchContractReviewedBy(e.target.value)) }
          />

}

export default SADArchContractReviewedByInput
