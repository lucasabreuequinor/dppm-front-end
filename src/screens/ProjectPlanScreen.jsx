import React from 'react'
import {
        PPMainContainer,
        PPContainer,
        PPLabel,
        PPTableContainer,
        PPProjectPlanTypeColumn,
        PPActivityColumn,
        PPBeginColumn,
        PPEndColumn,

        PPProjectPlanProjectPlanType,
        PPProjectPlanActivity,
        PPProjectPlanBegin,
        PPProjectPlanEnd,

        PPButtonsContainer,

        PPaddProjectPlanButtonContainer,
        PPaddProjectPlanButton,
        PPaddProjectPlanButtonLabel,

        PPdeleteProjectPlanButtonContainer,
        PPdeleteProjectPlanButton,
        PPdeleteProjectPlanButtonLabel,

        PPStyledPreviousNextLinkContainer,
        PPStyledPreviousLink,
        PPStyledNextLink

        // RRButtonsContainer,

        // RRaddRiskButtonContainer,
        // RRaddRiskButton,
        // RRaddRiskButtonLabel,

        // RRdeleteRiskButtonContainer,
        // RRdeleteRiskButton,
        // RRdeleteRiskButtonLabel,

        // RRStyledPreviousNextLinkContainer,
        // RRStyledPreviousLink,
        // RRStyledNextLink

         }
       from '../components/project_plan_screen'

import { useSelector, useDispatch } from 'react-redux'
import { addProjectPlan,
         deleteProjectPlan, 
         incrementNextProjectPlanID, 
         decrementNextProjectPlanID,
         }   
  from '../actions/project_plan'


const ProjectPlanScreen = () => {

  const dispatch = useDispatch(); 

  const projectPlans = useSelector(state => state.ppReducers.ppProjectPlans.projectPlans);  
  const nextProjectPlanId = useSelector(state => state.ppReducers.ppProjectPlans.nextProjectPlanId);  
  const maxProjectPlans = useSelector(state => state.ppReducers.ppProjectPlans.maxProjectPlans);

  
  const addNewProjectPlan = (e) => {

    if(projectPlans.length < maxProjectPlans)
    {
      dispatch(addProjectPlan(
                {
                  id: nextProjectPlanId,
                  project_plan_type: "lala",
                  activity: "lala",
                  begin: "lala",
                  end: "lala"
                }
      ))
      dispatch(incrementNextProjectPlanID())
    }
    else
      alert(`Maximum Project plans:${maxProjectPlans}`)
  
    e.preventDefault()
  
  }

  const deleteAnProjectPlan = (e) => {

    if(projectPlans.length > 0)
    {
      dispatch(deleteProjectPlan({id:projectPlans.length-1}))
      dispatch(decrementNextProjectPlanID())
    }
    e.preventDefault()
  }

  const savePdf = () => {

      let canvas_pp = document.getElementById('pp_pdf_container'); 
      window.scrollTo(0,0);  
      window.canvasObject[6].width = canvas_pp.offsetWidth;
      window.canvasObject[6].height = canvas_pp.offsetHeight;

      window.html2canvas(canvas_pp).then(function(canvas) {
      window.canvasObject[6].canvas = canvas;

    })
  }

  return (
      <React.Fragment>
        <PPMainContainer>
          <PPContainer id="pp_pdf_container">
            <PPLabel>Project plan</PPLabel>
            <PPTableContainer>
              <PPProjectPlanTypeColumn>Type</PPProjectPlanTypeColumn>
              <PPActivityColumn>Activity</PPActivityColumn>
              <PPBeginColumn>Date (Begin)</PPBeginColumn>
              <PPEndColumn>Date (End)</PPEndColumn>


              {
                projectPlans.map(projectPlan => 
                  <React.Fragment>
                    <PPProjectPlanProjectPlanType projectPlan={projectPlan}></PPProjectPlanProjectPlanType>
                    <PPProjectPlanActivity projectPlan={projectPlan}></PPProjectPlanActivity>
                    <PPProjectPlanBegin projectPlan={projectPlan}></PPProjectPlanBegin>              
                    <PPProjectPlanEnd projectPlan={projectPlan}></PPProjectPlanEnd>              
                  </React.Fragment>
                )
              }      
            
            <PPButtonsContainer data-html2canvas-ignore>

              <PPaddProjectPlanButtonContainer >
                <PPaddProjectPlanButton onClick={ addNewProjectPlan }></PPaddProjectPlanButton>
                <PPaddProjectPlanButtonLabel>
                  Add item
                </PPaddProjectPlanButtonLabel>
              </PPaddProjectPlanButtonContainer>

              <PPdeleteProjectPlanButtonContainer>
                <PPdeleteProjectPlanButton onClick={ deleteAnProjectPlan }></PPdeleteProjectPlanButton>
                <PPdeleteProjectPlanButtonLabel>
                  Delete item
                </PPdeleteProjectPlanButtonLabel>
              </PPdeleteProjectPlanButtonContainer>

            </PPButtonsContainer>

            </PPTableContainer>

            <PPStyledPreviousNextLinkContainer data-html2canvas-ignore>
              <PPStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/business_case_realization_plan"} > Previous </PPStyledPreviousLink>
              <PPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/resource_plan"} delay={100} pdfOnClick={savePdf}> Next </PPStyledNextLink>
            </PPStyledPreviousNextLinkContainer>

          </PPContainer>

        </PPMainContainer>

      </React.Fragment>
  )
}

export default ProjectPlanScreen