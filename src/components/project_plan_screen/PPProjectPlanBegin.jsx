import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeBegin } from '../../actions/project_plan';

const PPProjectPlanBeginStyled = styled.input`


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
const PPProjectPlanBegin = ({projectPlan}) => {
  const dispatch = useDispatch();

  return <PPProjectPlanBeginStyled
            type="date"
            key={projectPlan.id}
            onKeyDown={(e) => e.preventDefault()}
            style={{
                    backgroundColor: projectPlan.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0' 
                  }}

            value={projectPlan.begin}
            onChange={(e) => dispatch(changeBegin({id: projectPlan.id, begin:e.target.value})) }
            />

}

export default PPProjectPlanBegin

