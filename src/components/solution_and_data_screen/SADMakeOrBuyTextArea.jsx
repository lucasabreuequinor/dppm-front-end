import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeMakeOrBuy } from '../../actions/solution_and_data';

const SADMakeOrBuyTextAreaStyled = styled.textarea`

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
const SADMakeOrBuyTextArea = () => {
  const makeOrBuy = useSelector(state => state.sadReducers.sadMakeOrBuy);
  const dispatch = useDispatch();

  return <SADMakeOrBuyTextAreaStyled
            value={makeOrBuy}
            onChange={(e) => dispatch(changeMakeOrBuy(e.target.value)) }
          />

}

export default SADMakeOrBuyTextArea
