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
import html2canvas from '@nidi/html2canvas'

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

  const getAllElementsWithAttribute = (rootDoc, attribute) => {

    var matchingElements = [];
    var allElements = rootDoc.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
      if (allElements[i].getAttribute(attribute) !== null)
      {
        // Element exists with attribute. Add to array.
        matchingElements.push(allElements[i]);
      }
    }
    return matchingElements;
  }

  const savePdf = () => {     

      let canvas_rr = document.getElementById('rr_pdf_container');
      canvas_rr.style.opacity='0';
      /*** BEAUTY THE STYLE TO PRESENT ON PDF ***/
      
      Array.from(document.getElementsByClassName('ignore')).map(el => {
        el.classList.add('ignore-pdf')
      })
      
      Array.from(document.getElementsByClassName('table-column')).map( el => {
        el.classList.add('table-column-pdf')
        
      })        
      
      window.scrollTo(0,0);  
      window.canvasObject[8].width = canvas_rr.offsetWidth;
      window.canvasObject[8].height = canvas_rr.offsetHeight;

      html2canvas(canvas_rr, {
        onclone: function(clonedDoc) {
          let canvas_rr = clonedDoc.getElementById('rr_pdf_container');
          canvas_rr.style.opacity='1';
        }           
      }).then(function(canvas) {
      window.canvasObject[8].canvas = canvas.toDataURL('image/jpeg', 1.0);

    })
  }

  return (
      <React.Fragment>
        <RRMainContainer>
          <RRContainer id="rr_pdf_container">
            <RRLabel className="ignore" >Risk register</RRLabel>
            <RRTableContainer>
              <RRDescriptionColumn className="table-column" >Description</RRDescriptionColumn>
              <RRImpactColumn className="table-column" >Impact</RRImpactColumn>
              <RRMitigatingActionColumn className="table-column" >Mitigating Actions</RRMitigatingActionColumn>

              {
                risks.map(risk => 
                  <React.Fragment>
                    <RRRiskItemDescription risk={risk}></RRRiskItemDescription>
                    <RRRiskItemImpact risk={risk}></RRRiskItemImpact>
                    <RRRiskItemMitigatingAction risk={risk}></RRRiskItemMitigatingAction>              
                  </React.Fragment>
                )
              }      
            
            <RRButtonsContainer className="ignore" >

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


            <RRStyledPreviousNextLinkContainer className="ignore" >
              <RRStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/resource_plan"} > Previous </RRStyledPreviousLink>
              <RRStyledNextLink to={process.env.PUBLIC_URL + "/create_project/legal_plan_change_mgmt"} delay={100} pdfOnClick={savePdf}> Next </RRStyledNextLink>
            </RRStyledPreviousNextLinkContainer>

          </RRContainer>

        </RRMainContainer>

      </React.Fragment>
  )
}

export default RiskRegisterScreen