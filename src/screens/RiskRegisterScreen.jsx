import React from 'react'
import {
        RRMainContainer,
        RRContainer,
        RRLabel,
        RRTableContainer,
        RRDescriptionColumn,
        RRImpactColumn,
        RRMitigatingActionColumn,
        RRRiskItemDescription,
        RRRiskItemImpact,
        RRRiskItemMitigatingAction,

        RRButtonsContainer,

        RRaddRiskButtonContainer,
        RRaddRiskButton,
        RRaddRiskButtonLabel,

        RRdeleteRiskButtonContainer,
        RRdeleteRiskButton,
        RRdeleteRiskButtonLabel,

        RRStyledPreviousNextLinkContainer,
        RRStyledPreviousLink,
        RRStyledNextLink

         }
       from '../components/risk_register_screen'

import { useSelector, useDispatch } from 'react-redux'
import { addRisk,
         deleteRisk, 
         incrementNextRiskID, 
         decrementNextRiskID,
         }   
  from '../actions/risk_register'


const RiskRegisterScreen = () => {

  const dispatch = useDispatch(); 

  const risks = useSelector(state => state.rrReducers.rrRisks.risks);  
  const nextRiskId = useSelector(state => state.rrReducers.rrRisks.nextRiskId);
  const maxRisks = useSelector(state => state.rrReducers.rrRisks.maxRisks);
  
  const addNewRisk = (e) => {
    
    if(risks.length < maxRisks)
    {
      dispatch(addRisk(
                {
                  id: nextRiskId,
                  description: "lala",
                  impact: "lala",
                  mitigating_action: "lala"
                }
      ))
      dispatch(incrementNextRiskID())
    }
    else
      alert(`Maximum Risks:${maxRisks}`)
  
    e.preventDefault()
  
  }

  const deleteAnRisk = (e) => {

    if(risks.length > 0)
    {
      dispatch(deleteRisk({id:risks.length-1}))
      dispatch(decrementNextRiskID())
    }
    e.preventDefault()
  }


  return (
      <React.Fragment>
        <RRMainContainer>
          <RRContainer>
            <RRLabel>Risk register</RRLabel>
            <RRTableContainer>
              <RRDescriptionColumn>Description</RRDescriptionColumn>
              <RRImpactColumn>Impact</RRImpactColumn>
              <RRMitigatingActionColumn>Mitigating Actions</RRMitigatingActionColumn>

              {
                risks.map(risk => 
                  <React.Fragment>
                    <RRRiskItemDescription risk={risk}></RRRiskItemDescription>
                    <RRRiskItemImpact risk={risk}></RRRiskItemImpact>
                    <RRRiskItemMitigatingAction risk={risk}></RRRiskItemMitigatingAction>              
                  </React.Fragment>
                )
              }      
            
            <RRButtonsContainer>

              <RRaddRiskButtonContainer>
                <RRaddRiskButton onClick={ addNewRisk }></RRaddRiskButton>
                <RRaddRiskButtonLabel>
                  Add item
                </RRaddRiskButtonLabel>
              </RRaddRiskButtonContainer>

              <RRdeleteRiskButtonContainer>
                <RRdeleteRiskButton onClick={ deleteAnRisk }></RRdeleteRiskButton>
                <RRdeleteRiskButtonLabel>
                  Delete item
                </RRdeleteRiskButtonLabel>
              </RRdeleteRiskButtonContainer>

            </RRButtonsContainer>

            </RRTableContainer>


            <RRStyledPreviousNextLinkContainer>
              <RRStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/resource_plan"} > Previous </RRStyledPreviousLink>
              <RRStyledNextLink to={process.env.PUBLIC_URL + "/create_project/legal_plan_change_mgmt"} > Next </RRStyledNextLink>
            </RRStyledPreviousNextLinkContainer>

          </RRContainer>

        </RRMainContainer>

      </React.Fragment>
  )
}

export default RiskRegisterScreen