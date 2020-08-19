import React from 'react'
import {
  BCRPMainContainer,
  BCRPContainer,
  BCRPLabel,
  BCRPTableContainer,
  BCRPDriverColumn,
  BCRPEnablerColumn,
  BCRPActionColumn,
  BCRPFeasibilityColumn,
  BCRPDriver,
  BCRPEnabler,
  BCRPAction,
  BCRPFeasibility,
  BCRPRealizationPlanButtonsContainer,
  BCRPaddRealizationPlanButtonContainer,
  BCRPaddRealizationPlanButton,
  BCRPaddRealizationPlanButtonLabel,
  BCRPdeleteRealizationPlanButtonContainer,
  BCRPdeleteRealizationPlanButton,
  BCRPdeleteRealizationPlanButtonLabel,
  BCRPStyledPreviousNextLinkContainer,
  BCRPStyledPreviousLink,
  BCRPStyledNextLink

//         PPMainContainer,
//         PPContainer,
//         PPLabel,
//         PPTableContainer,
//         PPProjectPlanTypeColumn,
//         PPActivityColumn,
//         PPBeginColumn,
//         PPEndColumn,

//         PPProjectPlanProjectPlanType,
//         PPProjectPlanActivity,
//         PPProjectPlanBegin,
//         PPProjectPlanEnd,

//         PPButtonsContainer,

//         PPaddProjectPlanButtonContainer,
//         PPaddProjectPlanButton,
//         PPaddProjectPlanButtonLabel,

//         PPdeleteProjectPlanButtonContainer,
//         PPdeleteProjectPlanButton,
//         PPdeleteProjectPlanButtonLabel

//         // RRButtonsContainer,

//         // RRaddRiskButtonContainer,
//         // RRaddRiskButton,
//         // RRaddRiskButtonLabel,

//         // RRdeleteRiskButtonContainer,
//         // RRdeleteRiskButton,
//         // RRdeleteRiskButtonLabel,

//         // RRStyledPreviousNextLinkContainer,
//         // RRStyledPreviousLink,
//         // RRStyledNextLink

         }
       from '../components/business_case_realization_plan_screen'


import { useSelector, useDispatch } from 'react-redux'
import { addDriverItem,
         deleteDriverItem, 
         incrementNextDriverItemID, 
         decrementNextDriverItemID,
         }   
  from '../actions/business_case_items'
import html2canvas from '@nidi/html2canvas'

const BusinessCaseRealizationPlanScreen = () => {

  const dispatch = useDispatch(); 

  const driverItems = useSelector(state => state.bciReducers.bciItems.bciDriverItems.driverItems);  
  const nextDriverItemId = useSelector(state => state.bciReducers.bciItems.bciDriverItems.nextDriverItemId);  
  const maxDriverItems = useSelector(state => state.bciReducers.bciItems.bciDriverItems.maxDriverItems);

  
  const addNewRealizationPlan = (e) => {

    if(driverItems.length < maxDriverItems)
    {
      dispatch(addDriverItem(
                {
                  id: nextDriverItemId,
                  driver: "lala",
                  enabler: "lala",
                  driver_item_action: "lala",
                  feasibility: "lala"
                }
      ))
      dispatch(incrementNextDriverItemID())
    }
    else
      alert(`Maximum Project plans:${maxDriverItems}`)
  
    e.preventDefault()
  
  }

  const deleteAnRealizationPlan = (e) => {
    if(driverItems.length > 0)
    {
      dispatch(deleteDriverItem({id:driverItems.length-1}))
      dispatch(decrementNextDriverItemID())
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

    let canvas_bcrpItems = document.getElementById('bcrp_pdf_container');
    canvas_bcrpItems.style.opacity='0';
    /*** BEAUTY THE STYLE TO PRESENT ON PDF ***/

    Array.from(document.getElementsByClassName('ignore')).map(el => {
      el.classList.add('ignore-pdf')
    })
    
    Array.from(document.getElementsByClassName('table-column')).map( el => {
      el.classList.add('table-column-pdf')
      
    })

    window.scrollTo(0,0);  
    window.canvasObject[5].width = canvas_bcrpItems.offsetWidth;
    window.canvasObject[5].height = canvas_bcrpItems.offsetHeight;

    html2canvas(canvas_bcrpItems, {
      onclone: function(clonedDoc) {
        let canvas_bcrpItems = clonedDoc.getElementById('bcrp_pdf_container');
        canvas_bcrpItems.style.opacity='1';
      }      
    }).then(function(canvas) {
    window.canvasObject[5].canvas = canvas.toDataURL('image/jpeg', 1.0);

  })
}

  return (
      <React.Fragment>
        <BCRPMainContainer>
          <BCRPContainer id="bcrp_pdf_container">
            <BCRPLabel className="ignore" >Business Case: Realization plan</BCRPLabel>
            <BCRPTableContainer>
              <BCRPDriverColumn className="table-column" >Value drivers / Cost drivers</BCRPDriverColumn>
              <BCRPEnablerColumn className="table-column" >Enablers</BCRPEnablerColumn>
              <BCRPActionColumn className="table-column" >Actions</BCRPActionColumn>
              <BCRPFeasibilityColumn className="table-column" >Feasibility</BCRPFeasibilityColumn>

              {
                driverItems.map(driverItem => 
                  <React.Fragment>
                    <BCRPDriver driverItem={driverItem}></BCRPDriver> 
                    <BCRPEnabler driverItem={driverItem}></BCRPEnabler>
                    <BCRPAction driverItem={driverItem}></BCRPAction>
                    <BCRPFeasibility driverItem={driverItem}></BCRPFeasibility>
                  </React.Fragment>
                )
              }    

              <BCRPRealizationPlanButtonsContainer className="ignore" >

                <BCRPaddRealizationPlanButtonContainer>
                  <BCRPaddRealizationPlanButton onClick={ addNewRealizationPlan }></BCRPaddRealizationPlanButton>
                  <BCRPaddRealizationPlanButtonLabel>
                    Add item
                  </BCRPaddRealizationPlanButtonLabel>
                </BCRPaddRealizationPlanButtonContainer>

                <BCRPdeleteRealizationPlanButtonContainer>
                  <BCRPdeleteRealizationPlanButton onClick={ deleteAnRealizationPlan }></BCRPdeleteRealizationPlanButton>
                  <BCRPdeleteRealizationPlanButtonLabel>
                    Delete item
                  </BCRPdeleteRealizationPlanButtonLabel>
                </BCRPdeleteRealizationPlanButtonContainer>

              </BCRPRealizationPlanButtonsContainer>

            </BCRPTableContainer>

            <BCRPStyledPreviousNextLinkContainer className="ignore">
              <BCRPStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/business_case_itens"} > Previous </BCRPStyledPreviousLink>
              <BCRPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/project_plan"} delay={100} pdfOnClick={savePdf}> Next </BCRPStyledNextLink>
            </BCRPStyledPreviousNextLinkContainer>

          </BCRPContainer>
        </BCRPMainContainer>

      </React.Fragment>
  )
}

export default BusinessCaseRealizationPlanScreen