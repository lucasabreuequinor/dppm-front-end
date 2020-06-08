import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeFrom } from '../../actions/change_story';

const CHFromTextAreaStyled = styled.textarea`

  border: 1px solid #707070;
  width: 100%;
  padding-top: .5rem;
  padding: .5rem;
  border-radius: .2rem;
  font-weight: 500;
  font-family: inherit;
  color: #4d4c4c;
  padding-left : 10px;
  padding-right: 10px;
  box-sizing: border-box;
  

  flex: 1;
  margin-top: .8rem;
  resize: none;
}
`
const CHFromTextArea = () => {
  const from = useSelector(state => state.chReducers.chFrom);
  const dispatch = useDispatch();

  return <CHFromTextAreaStyled
            value={from}
            onChange={(e) => dispatch(changeFrom(e.target.value)) }
          />

}

export default CHFromTextArea

