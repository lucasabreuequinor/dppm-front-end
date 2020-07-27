import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeProjectPlanType } from '../../actions/project_plan';

const PPProjectPlanProjectPlanTypeStyled = styled.input`


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
const PPProjectPlanProjectPlanType = ({projectPlan}) => {
  const dispatch = useDispatch();

  return <PPProjectPlanProjectPlanTypeStyled
            type="text"
            key={projectPlan.id}
            style={{
                    backgroundColor: projectPlan.id % 2 != 0 ? '#b3c7c9' : '#E0E0E0'
                  }}

            value={projectPlan.project_plan_type}
            onChange={(e) => dispatch(changeProjectPlanType({id: projectPlan.id, project_plan_type:e.target.value})) }
            />

}

export default PPProjectPlanProjectPlanType

