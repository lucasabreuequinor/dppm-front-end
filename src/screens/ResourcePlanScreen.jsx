import React from 'react'
import {
        RPMainContainer,
        RPContainer,
        RPLabel,
        RPTableContainer,
        RPResourceOwnerColumn,
        RPRoleRequiredColumn,
        RPNameColumn,
        RPAllocationColumn,
        RPStartDateColumn,
        RPDurationColumn,

        RPResourceItemResourceOwner,
        RPResourceItemRoleRequired,
        RPResourceItemName,
        RPResourceItemAllocation,
        RPResourceItemStartDate,
        RPResourceItemDuration,

        RPButtonsContainer,

        RPaddResourceButtonContainer,
        RPaddResourceButton,
        RPaddResourceButtonLabel,

        RPdeleteResourceButtonContainer,
        RPdeleteResourceButton,
        RPdeleteResourceButtonLabel,

        RPStyledPreviousNextLinkContainer,
        RPStyledPreviousLink,
        RPStyledNextLink,

         }
       from '../components/resource_plan_screen'

import { useSelector, useDispatch } from 'react-redux'
import { addResource,
         deleteResource, 
         incrementNextResourceID, 
         decrementNextResourceID,
         }   
  from '../actions/resource_plan'
import html2canvas from '@nidi/html2canvas'

const ResourcePlanScreen = () => {

  const dispatch = useDispatch(); 

  const resources = useSelector(state => state.rpReducers.rpResources.resources);  
  const nextResourceId = useSelector(state => state.rpReducers.rpResources.nextResourceId);
  const maxResources = useSelector(state => state.rpReducers.rpResources.maxResources);
  
  const addNewResource = (e) => {
    
    if(resources.length < maxResources)
    {
      dispatch(addResource(
                {
                  id: nextResourceId,
                  resource_owner: "",
                  role_required: "",
                  name: "",
                  allocation: "",
                  start_date: "",
                  duration: ""
                }
      ))
      dispatch(incrementNextResourceID())
    }
    else
      alert(`Maximum Resources:${maxResources}`)
  
    e.preventDefault()
  
  }

  const deleteAnResource = (e) => {

    if(resources.length > 0)
    {
      dispatch(deleteResource({id:resources.length-1}))
      dispatch(decrementNextResourceID())
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

    let canvas_rp = document.getElementById('rp_pdf_container');
    canvas_rp.style.opacity='0';
    /*** BEAUTY THE STYLE TO PRESENT ON PDF ***/

    Array.from(document.getElementsByClassName('ignore')).map(el => {
      el.classList.add('ignore-pdf')
    })
    
    Array.from(document.getElementsByClassName('table-column')).map( el => {
      el.classList.add('table-column-pdf')
      
    })        

    window.scrollTo(0,0);
    window.canvasObject[7].width = canvas_rp.offsetWidth;
    window.canvasObject[7].height = canvas_rp.offsetHeight;    
    
    html2canvas(canvas_rp, {
      onclone: function(clonedDoc) {
        let canvas_rp = clonedDoc.getElementById('rp_pdf_container');
        canvas_rp.style.opacity='1';
      }           
    }).then(function(canvas) {
      window.canvasObject[7].canvas = canvas.toDataURL('image/jpeg', 1.0);

    }) 
  }  

  return (
      <React.Fragment>
        <RPMainContainer>
          <RPContainer id="rp_pdf_container">
            <RPLabel className="ignore" >Resource Plan</RPLabel>
            <RPTableContainer>

              <RPResourceOwnerColumn className="table-column" >Resource owner</RPResourceOwnerColumn>
              <RPRoleRequiredColumn className="table-column" >Role required</RPRoleRequiredColumn>
              <RPNameColumn className="table-column" >Name</RPNameColumn>
              <RPAllocationColumn className="table-column" >Allocation</RPAllocationColumn>
              <RPStartDateColumn className="table-column" >Start date</RPStartDateColumn>
              <RPDurationColumn className="table-column" >Duration</RPDurationColumn>

              {
                resources.map(resource => 
                  <React.Fragment>
                    <RPResourceItemResourceOwner resource={resource}></RPResourceItemResourceOwner>
                    <RPResourceItemRoleRequired resource={resource}></RPResourceItemRoleRequired>
                    <RPResourceItemName resource={resource}></RPResourceItemName>
                    <RPResourceItemAllocation resource={resource}></RPResourceItemAllocation>       
                    <RPResourceItemStartDate resource={resource}></RPResourceItemStartDate>              
                    <RPResourceItemDuration resource={resource}></RPResourceItemDuration>              
                  </React.Fragment>
                )
              }

              <RPButtonsContainer className="ignore" >

                <RPaddResourceButtonContainer>
                  <RPaddResourceButton onClick={ addNewResource }></RPaddResourceButton>
                  <RPaddResourceButtonLabel>
                    Add item
                  </RPaddResourceButtonLabel>
                </RPaddResourceButtonContainer>

                <RPdeleteResourceButtonContainer>
                  <RPdeleteResourceButton onClick={ deleteAnResource }></RPdeleteResourceButton>
                  <RPdeleteResourceButtonLabel>
                    Delete item
                  </RPdeleteResourceButtonLabel>
                </RPdeleteResourceButtonContainer>

              </RPButtonsContainer>

            </RPTableContainer>

            <RPStyledPreviousNextLinkContainer className="ignore" >
                <RPStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/project_plan"} > Previous </RPStyledPreviousLink>
                <RPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/risk_register"} delay={100} pdfOnClick={ savePdf }> Next </RPStyledNextLink>
            </RPStyledPreviousNextLinkContainer>

          </RPContainer>

        </RPMainContainer>
      </React.Fragment>
  )
}

export default ResourcePlanScreen