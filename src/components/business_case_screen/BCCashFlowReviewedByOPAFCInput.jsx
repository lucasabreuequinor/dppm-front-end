import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeReviewedByOPAFC } from '../../actions/business_case';

const BCCashFlowReviewedByOPAFCInputStyled = styled.select`

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
const BCCashFlowReviewedByOPAFCInput = () => {
  const reviewedByOPAFC = useSelector(state => state.bcReducers.bcReviewedByOPAFC);
  const dispatch = useDispatch();


  const reviewedByOPAFCStatus = [
    { id:0, name: "YES" },
    { id:1, name: "NO"}
  ]

  return <BCCashFlowReviewedByOPAFCInputStyled
            value={reviewedByOPAFC}
            onChange={(e) => dispatch(changeReviewedByOPAFC(e.target.value)) }
          >
        
          {
            reviewedByOPAFCStatus.map(status => 
              <option key={status.id} value={status.name}>
                {status.name}
              </option>  
            )
          }

          </BCCashFlowReviewedByOPAFCInputStyled>

}

export default BCCashFlowReviewedByOPAFCInput
