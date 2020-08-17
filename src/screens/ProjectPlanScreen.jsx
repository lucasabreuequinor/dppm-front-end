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

      let canvas_pp = document.getElementById('pp_pdf_container'); 
      window.scrollTo(0,0);  
      window.canvasObject[6].width = canvas_pp.offsetWidth;
      window.canvasObject[6].height = canvas_pp.offsetHeight;

      window.html2canvas(canvas_pp, {
        onclone: function (clonedDoc) {
          /*** BEAUTY THE STYLE TO PRESENT ON PDF ***/
          Array.from(getAllElementsWithAttribute(clonedDoc, 'data-html2canvas-ignore')).map(
            el =>  el.style.display = 'none'

          )

          Array.from(getAllElementsWithAttribute(clonedDoc, 'data-table-column')).map(
            el => el.classList.add('table-column-pdf')
            
          )            
        }        
      }).then(function(canvas) {
      window.canvasObject[6].canvas = canvas.toDataURL('image/jpeg', 1.0);

    })
  }

  return (
      <React.Fragment>
        <PPMainContainer>
          <PPContainer id="pp_pdf_container">
            <PPLabel data-html2canvas-ignore >Project plan</PPLabel>
            <PPTableContainer>
              <PPProjectPlanTypeColumn data-table-column >Type</PPProjectPlanTypeColumn>
              <PPActivityColumn data-table-column >Activity</PPActivityColumn>
              <PPBeginColumn data-table-column >Date (Begin)</PPBeginColumn>
              <PPEndColumn data-table-column >Date (End)</PPEndColumn>


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