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
                  resource_owner: "lala",
                  role_required: "lala",
                  name: "lala",
                  allocation: "lala",
                  start_date: "lala",
                  duration: "lala"
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


  const savePdf = () => {

    let canvas_rp = document.getElementById('rp_pdf_container'); 
    window.scrollTo(0,0);
    window.canvasObject[7].width = canvas_rp.offsetWidth;
    window.canvasObject[7].height = canvas_rp.offsetHeight;    
    
    window.html2canvas(canvas_rp).then(function(canvas) {
    window.canvasObject[7].canvas = canvas;

  })
}  

  return (
      <React.Fragment>
        <RPMainContainer>
          <RPContainer id="rp_pdf_container">
            <RPLabel>Resource Plan</RPLabel>
            <RPTableContainer>

              <RPResourceOwnerColumn>Resource owner</RPResourceOwnerColumn>
              <RPRoleRequiredColumn>Role required</RPRoleRequiredColumn>
              <RPNameColumn>Name</RPNameColumn>
              <RPAllocationColumn>Allocation</RPAllocationColumn>
              <RPStartDateColumn>Start date</RPStartDateColumn>
              <RPDurationColumn>Duration</RPDurationColumn>

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

              <RPButtonsContainer data-html2canvas-ignore>

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

            <RPStyledPreviousNextLinkContainer data-html2canvas-ignore>
                <RPStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/project_plan"} > Previous </RPStyledPreviousLink>
                <RPStyledNextLink to={process.env.PUBLIC_URL + "/create_project/risk_register"} delay={100} pdfOnClick={ savePdf }> Next </RPStyledNextLink>
            </RPStyledPreviousNextLinkContainer>

          </RPContainer>

        </RPMainContainer>
      </React.Fragment>
  )
}

export default ResourcePlanScreen