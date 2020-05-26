import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeArchtechtureDetail } from '../../actions/solution_and_data';

const SADArchDetailsInputStyled = styled.input`

  border: 1px solid #707070;
  width: 100%;
  padding-top: .5em;
  padding: .5em;
  border-radius: .2em;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;
  

  margin-top: .8em;
  resize: none;
}
`
const SADArchDetailsInput = () => {
  const archtechtureDetail = useSelector(state => state.sadReducers.sadArchtechtureDetail);
  const dispatch = useDispatch();

  return <SADArchDetailsInputStyled
            value={archtechtureDetail}
            onChange={(e) => dispatch(changeArchtechtureDetail(e.target.value)) }
          />

}

export default SADArchDetailsInput
