import React from 'react'
import {
  LPCMMainContainer,
  LPCMContainer,

  LPCMLegalPlanLabel,
  LPCMLegalPlanTableContainer,

  LPCMRequirementColumn,
  LPCMStatusColumn,
  LPCMFollowUpActionColumn,
  LPCMReviewedApprovedColumn,

  LPCMLegalItemRequirement,
  LPCMLegalItemStatus,
  LPCMLegalItemFollowUpAction,
  LPCMLegalItemReviewedApproved,
  
  LPCMLegalButtonsContainer,

  LPCMaddLegalButtonContainer,
  LPCMaddLegalButton,
  LPCMaddLegalButtonLabel,
  
  LPCMdeleteLegalButtonContainer,
  LPCMdeleteLegalButton,
  LPCMdeleteLegalButtonLabel,

  LPCMChangeMgmtLabel,
  LPCMChangeMgmtTableContainer,

  LPCMChangeMgmtItemRequirement,
  LPCMChangeMgmtItemStatus,
  LPCMChangeMgmtItemFollowUpAction,
  LPCMChangeMgmtItemReviewedApproved,

  LPCMChangeMgmtButtonsContainer,

  LPCMaddChangeMgmtButtonContainer,
  LPCMaddChangeMgmtButton,
  LPCMaddChangeMgmtButtonLabel,

  LPCMdeleteChangeMgmtButtonContainer,
  LPCMdeleteChangeMgmtButton,
  LPCMdeleteChangeMgmtButtonLabel,

  LPCMStyledPreviousNextLinkContainer,
  LPCMStyledPreviousLink,
  LPCMStyledNextLink

//         RRButtonsContainer,

//         RRaddRiskButtonContainer,
//         RRaddRiskButton,
//         RRaddRiskButtonLabel,

//         RRdeleteRiskButtonContainer,
//         RRdeleteRiskButton,
//         RRdeleteRiskButtonLabel,

//         RRStyledPreviousNextLinkContainer,
//         RRStyledPreviousLink,
//         RRStyledNextLink

         }
       from '../components/legal_plan_change_mgmt_screen'

import { useSelector, useDispatch } from 'react-redux'
import { addLegalItem,
         addChangeMgmtItem,

         deleteLegalItem,
         deleteChangeMgmtItem,

         incrementNextLegalItemID,
         incrementNextChangeMgmtItemID,

         decrementNextLegalItemID,
         decrementNextChangeMgmtItemID
         }   
  from '../actions/legal_plan_change_mgmt'


const LegalPlanChangeMgmtScreen = () => {

  const dispatch = useDispatch(); 

  const legalItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmLegalItems.legalItems);
  const nextLegalItemId = useSelector(state => state.lpcmReducers.lpcmItems.lpcmLegalItems.nextLegalItemId);
  const maxLegalItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmLegalItems.maxLegalItems);

  const changeMgmtItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmChangeMgmtItems.changeMgmtItems);
  const nextChangeMgmtItemId = useSelector(state => state.lpcmReducers.lpcmItems.lpcmChangeMgmtItems.nextChangeMgmtItemId);
  const maxChangeMgmtItems = useSelector(state => state.lpcmReducers.lpcmItems.lpcmChangeMgmtItems.maxChangeMgmtItems);
  
  const addNewLegal = (e) => {
    
    if(legalItems.length < maxLegalItems)
    {
      dispatch(addLegalItem(
                {
                  id: nextLegalItemId,
                  requirement: "lala",
                  status: "lala",
                  follow_up_action: "lala",
                  reviewed_approved: "lala"
                }
      ))
      dispatch(incrementNextLegalItemID())
    }
    else
      alert(`Maximum Legals:${maxLegalItems}`)
  
    e.preventDefault()
  
  }

  const deleteAnLegal = (e) => {

    if(legalItems.length > 0)
    {
      dispatch(deleteLegalItem({id:legalItems.length-1}))
      dispatch(decrementNextLegalItemID())
    }
    e.preventDefault()
  }

  const addNewChangeMgmt = (e) => {
    
    if(changeMgmtItems.length < maxChangeMgmtItems)
    {
      dispatch(addChangeMgmtItem(
                {
                  id: nextChangeMgmtItemId,
                  requirement: "lala",
                  status: "lala",
                  follow_up_action: "lala",
                  reviewed_approved: "lala"
                }
      ))
      dispatch(incrementNextChangeMgmtItemID())
    }
    else
      alert(`Maximum ChangeMgmts:${maxChangeMgmtItems}`)
  
    e.preventDefault()
  
  }

  const deleteAnChangeMgmt = (e) => {

    if(changeMgmtItems.length > 0)
    {
      dispatch(deleteChangeMgmtItem({id:changeMgmtItems.length-1}))
      dispatch(decrementNextChangeMgmtItemID())
    }
    e.preventDefault()
  }

  return (
      <React.Fragment>
        <LPCMMainContainer>
          <LPCMContainer>
            <LPCMLegalPlanLabel>Legal and security plan</LPCMLegalPlanLabel>
            <LPCMLegalPlanTableContainer>

              <LPCMRequirementColumn>Requirements</LPCMRequirementColumn>
              <LPCMStatusColumn>Status</LPCMStatusColumn>
              <LPCMFollowUpActionColumn>Follow up actions</LPCMFollowUpActionColumn>
              <LPCMReviewedApprovedColumn>Reviewed/approved by</LPCMReviewedApprovedColumn>

              {
                legalItems.map(legal => 
                  <React.Fragment>
                    <LPCMLegalItemRequirement legal={legal}></LPCMLegalItemRequirement>
                    <LPCMLegalItemStatus legal={legal}></LPCMLegalItemStatus>
                    <LPCMLegalItemFollowUpAction legal={legal}></LPCMLegalItemFollowUpAction>              
                    <LPCMLegalItemReviewedApproved legal={legal}></LPCMLegalItemReviewedApproved>              
                  </React.Fragment>
                )
              }

              <LPCMLegalButtonsContainer>

                <LPCMaddLegalButtonContainer>
                  <LPCMaddLegalButton onClick={ addNewLegal }></LPCMaddLegalButton>
                  <LPCMaddLegalButtonLabel>
                    Add item
                  </LPCMaddLegalButtonLabel>
                </LPCMaddLegalButtonContainer>

                <LPCMdeleteLegalButtonContainer>
                  <LPCMdeleteLegalButton onClick={ deleteAnLegal }></LPCMdeleteLegalButton>
                  <LPCMdeleteLegalButtonLabel>
                    Delete item
                  </LPCMdeleteLegalButtonLabel>
                </LPCMdeleteLegalButtonContainer>

              </LPCMLegalButtonsContainer>           

            </LPCMLegalPlanTableContainer>


            <LPCMChangeMgmtLabel>Change management and value realisation</LPCMChangeMgmtLabel>
            <LPCMChangeMgmtTableContainer> 

              <LPCMRequirementColumn>Legal and security plan</LPCMRequirementColumn>  
              <LPCMStatusColumn>Status</LPCMStatusColumn>
              <LPCMFollowUpActionColumn>Follow up actions</LPCMFollowUpActionColumn>
              <LPCMReviewedApprovedColumn>Reviewed/approved by</LPCMReviewedApprovedColumn>


              {
                changeMgmtItems.map(changeMgmt => 
                  <React.Fragment>
                    <LPCMChangeMgmtItemRequirement changeMgmt={changeMgmt}></LPCMChangeMgmtItemRequirement>
                    <LPCMChangeMgmtItemStatus changeMgmt={changeMgmt}></LPCMChangeMgmtItemStatus>
                    <LPCMChangeMgmtItemFollowUpAction changeMgmt={changeMgmt}></LPCMChangeMgmtItemFollowUpAction>              
                    <LPCMChangeMgmtItemReviewedApproved changeMgmt={changeMgmt}></LPCMChangeMgmtItemReviewedApproved>              
                  </React.Fragment>
                )
              }

              <LPCMChangeMgmtButtonsContainer>

                <LPCMaddChangeMgmtButtonContainer>
                  <LPCMaddChangeMgmtButton onClick={ addNewChangeMgmt }></LPCMaddChangeMgmtButton>
                  <LPCMaddChangeMgmtButtonLabel>
                    Add item
                  </LPCMaddChangeMgmtButtonLabel>
                </LPCMaddChangeMgmtButtonContainer>

                <LPCMdeleteChangeMgmtButtonContainer>
                  <LPCMdeleteChangeMgmtButton onClick={ deleteAnChangeMgmt }></LPCMdeleteChangeMgmtButton>
                  <LPCMdeleteChangeMgmtButtonLabel>
                    Delete item
                  </LPCMdeleteChangeMgmtButtonLabel>
                </LPCMdeleteChangeMgmtButtonContainer>

              </LPCMChangeMgmtButtonsContainer>              

            </LPCMChangeMgmtTableContainer>

            <LPCMStyledPreviousNextLinkContainer>
              <LPCMStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/risk_register"} > Previous </LPCMStyledPreviousLink>
              <LPCMStyledNextLink to={process.env.PUBLIC_URL + "/"} > Next </LPCMStyledNextLink>
            </LPCMStyledPreviousNextLinkContainer>

          </LPCMContainer>
         
        </LPCMMainContainer>

      </React.Fragment>
  )
}

export default LegalPlanChangeMgmtScreen