import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeLegalItemRequirement } from '../../actions/legal_plan_change_mgmt';

const LPCMLegalItemRequirementStyled = styled.input`


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
const LPCMLegalItemRequirement = ({legal}) => {
  const dispatch = useDispatch();

  return <LPCMLegalItemRequirementStyled
            type="text"
            key={legal.id}
            style={{
                    backgroundColor: legal.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={legal.requirement}
            onChange={(e) => dispatch(changeLegalItemRequirement({id: legal.id, requirement:e.target.value})) }
            />

}

export default LPCMLegalItemRequirement

