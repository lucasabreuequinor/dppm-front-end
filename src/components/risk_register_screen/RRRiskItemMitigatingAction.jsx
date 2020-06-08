import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeMitigatingAction } from '../../actions/risk_register';

const RRRiskItemMitigatingActionStyled = styled.input`


  border: 0px solid #707070;
  width:100%;
  padding: .5rem;
  font-weight: 500;
  font-family: inherit;
  color: #000000;
  box-sizing: border-box;
  text-overflow: ellipsis;  

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }  

  resize: none;
}
`
const RRRiskItemMitigatingAction = ({risk}) => {
  const dispatch = useDispatch();

  return <RRRiskItemMitigatingActionStyled
            type="text"
            key={risk.id}
            style={{
                    backgroundColor: risk.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={risk.mitigating_action}
            onChange={(e) => dispatch(changeMitigatingAction({id: risk.id, mitigating_action:e.target.value})) }
            />

}

export default RRRiskItemMitigatingAction

