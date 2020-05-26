import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeTo } from '../../actions/change_story';

const CHToTextAreaStyled = styled.textarea`

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
  

  flex: 1;
  margin-top: .8em;
  resize: none;
}
`
const CHToTextArea = () => {
  const to = useSelector(state => state.chReducers.chTo);
  const dispatch = useDispatch();

  return <CHToTextAreaStyled
            value={to}
            onChange={(e) => dispatch(changeTo(e.target.value)) }
          />

}

export default CHToTextArea
