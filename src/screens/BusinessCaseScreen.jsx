import React from "react";
import {
  BCMainContainer,
  BCFormAndCashFlowGraphicContainerAndLabel,
  BCLabel,
  BCFormAndCashFlowGraphicContainer,
  BCKeyAssumpCashFlowImpactKeyPerformanceIndicatorsContainer,
  BCKeyAssumpCashFlowImpactContainer,
  BCKeyAssumpContainer,
  BCKeyAssumpLabel,
  BCKeyAssumpTextArea,
  BCCashFlowImpactLabelContainer,
  BCCashFlowImpactContainer,
  BCCashFlowReviewedByOPAFCContainer,
  BCCashFlowReviewedByOPAFCLabel,
  BCCashFlowReviewedByOPAFCInput,
  BCCashFlowReviewerContainer,
  BCCashFlowReviewerLabel,
  BCCashFlowReviewerInput,
  BCCashFlowApprovedByContainer,
  BCCashFlowApprovedByLabel,
  BCCashFlowApprovedByInput,


  BCCashFlowImpactLabel,
  BCKeyPerformanceIndicatorsContainer,
  BCKeyPerformanceIndicatorsLabel,
  BCKeyPerformanceIndicatorsTableContainer,
  BCKeyPerformanceIndicatorsTableImpactColumn,
  BCKeyPerformanceIndicatorsTableIndicatorColumn,

  BCKeyPerformanceIndicatorsTableBaselineContainer,
  BCKeyPerformanceIndicatorsTableBaselineColumn,
  BCKeyPerformanceIndicatorsTableBaselineSelect,


  BCKeyPerformanceIndicatorsTableYear1Container,
  BCKeyPerformanceIndicatorsTableYear1Column,
  BCKeyPerformanceIndicatorsTableYear1Select,

  BCKeyPerformanceIndicatorsTableYear2Container,
  BCKeyPerformanceIndicatorsTableYear2Column,
  BCKeyPerformanceIndicatorsTableYear2Select,

  BCKeyPerformanceIndicatorsTableYear3Container,
  BCKeyPerformanceIndicatorsTableYear3Column,
  BCKeyPerformanceIndicatorsTableYear3Select,

  BCKeyPerformanceIndicatorsTableYear4Container,
  BCKeyPerformanceIndicatorsTableYear4Column,
  BCKeyPerformanceIndicatorsTableYear4Select,

  BCKeyPerformanceIndicatorsTableYear5Container,
  BCKeyPerformanceIndicatorsTableYear5Column,
  BCKeyPerformanceIndicatorsTableYear5Select,

  BCKeyPerformanceIndicatorsButtonsContainer,
  
  BCKeyPerformanceIndicatorsAddKpiButtonContainer,
  BCKeyPerformanceIndicatorsAddKpiButton,
  BCKeyPerformanceIndicatorsAddKpiButtonLabel,

  BCKeyPerformanceIndicatorsDeleteKpiButtonContainer,
  BCKeyPerformanceIndicatorsDeleteKpiButton,
  BCKeyPerformanceIndicatorsDeleteKpiButtonLabel,

  BCKeyPerformanceIndicatorsKpiItemImpactType,
  BCKeyPerformanceIndicatorsKpiItemIndicator,
  BCKeyPerformanceIndicatorsKpiItemBaseline,
  BCKeyPerformanceIndicatorsKpiItemYear1,
  BCKeyPerformanceIndicatorsKpiItemYear2,
  BCKeyPerformanceIndicatorsKpiItemYear3,
  BCKeyPerformanceIndicatorsKpiItemYear4,
  BCKeyPerformanceIndicatorsKpiItemYear5,
  BCCashFlowGraphicContainer,
  BCCashFlowGraphic,

  BCStyledPreviousNextLinkContainer,
  BCStyledPreviousLink,
  BCStyledNextLink

  }
  from "../components/business_case_screen"

import { useSelector, useDispatch } from 'react-redux'
import { addKPI, deleteKPI, decrementNextKPIID, incrementNextKPIID } from '../actions/business_case'

const BusinessCaseScreen = () => {

  const dispatch = useDispatch(); 

  const kpis = useSelector(state => state.bcReducers.bcKPIs.kpis);
  const nextKpiId = useSelector(state => state.bcReducers.bcKPIs.nextKpiId);
  const maxKpis = useSelector(state => state.bcReducers.bcKPIs.maxKpis);

  const addNewKPI = (e) => {
    
    if(kpis.length < maxKpis)
    {
      dispatch(addKPI(
                {
                  id: nextKpiId,
                  baseline: 100,
                  year1: 100,
                  year2: 100,
                  year3: 100,
                  year4: 100,
                  year5: 100,
                }
      ))
      dispatch(incrementNextKPIID())
    }
    else
      alert(`Maximum KPIs:${maxKpis}`)

    e.preventDefault()
  }

  const deleteAnKPI = (e) => {

    if(kpis.length > 0)
    {
      dispatch(deleteKPI({id:kpis.length-1}))
      dispatch(decrementNextKPIID())
    }
    e.preventDefault()
  }

  const savePdf = () => {

    let canvas_bc = document.getElementById('bc_pdf_container'); 
    window.scrollTo(0,0);  
    window.canvasObject[3].width = canvas_bc.offsetWidth;
    window.canvasObject[3].height = canvas_bc.offsetHeight;

    window.html2canvas(canvas_bc).then(function(canvas) {
    window.canvasObject[3].canvas = canvas;

  })
}

    return(
        <React.Fragment>
          <BCMainContainer>
            <BCFormAndCashFlowGraphicContainerAndLabel id="bc_pdf_container">

              <BCLabel>Business Case</BCLabel>

              <BCFormAndCashFlowGraphicContainer>

                  <BCKeyAssumpCashFlowImpactKeyPerformanceIndicatorsContainer>

                    <BCKeyAssumpCashFlowImpactContainer>  
                      
                      <BCKeyAssumpContainer>

                        <BCKeyAssumpLabel>Key assumptions:</BCKeyAssumpLabel>
                        <BCKeyAssumpTextArea></BCKeyAssumpTextArea>

                      </BCKeyAssumpContainer>

                      <BCCashFlowImpactLabelContainer>

                        <BCCashFlowImpactLabel>Cashflow impact:</BCCashFlowImpactLabel>

                        <BCCashFlowImpactContainer>

                          <BCCashFlowReviewedByOPAFCContainer>
                            
                            <BCCashFlowReviewedByOPAFCLabel>{"Reviewed by OPA/F&C?"}</BCCashFlowReviewedByOPAFCLabel>
                            <BCCashFlowReviewedByOPAFCInput></BCCashFlowReviewedByOPAFCInput>
                          
                          </BCCashFlowReviewedByOPAFCContainer>

                          <BCCashFlowReviewerContainer>
                            
                            <BCCashFlowReviewerLabel>{"Reviewer"}</BCCashFlowReviewerLabel>
                            <BCCashFlowReviewerInput></BCCashFlowReviewerInput>
                          
                          </BCCashFlowReviewerContainer>

                          <BCCashFlowApprovedByContainer>
                            
                            <BCCashFlowApprovedByLabel>{"Approved By"}</BCCashFlowApprovedByLabel>
                            <BCCashFlowApprovedByInput></BCCashFlowApprovedByInput>
                          
                          </BCCashFlowApprovedByContainer>

                        </BCCashFlowImpactContainer>

                      </BCCashFlowImpactLabelContainer>


                    </BCKeyAssumpCashFlowImpactContainer>

                    <BCKeyPerformanceIndicatorsContainer>
                      <BCKeyPerformanceIndicatorsLabel>Key performance indicators:</BCKeyPerformanceIndicatorsLabel>
                      <BCKeyPerformanceIndicatorsTableContainer>

                        <BCKeyPerformanceIndicatorsTableImpactColumn>Impact type</BCKeyPerformanceIndicatorsTableImpactColumn>
                        <BCKeyPerformanceIndicatorsTableIndicatorColumn>Indicator</BCKeyPerformanceIndicatorsTableIndicatorColumn>
                        
                        <BCKeyPerformanceIndicatorsTableBaselineContainer>
                          <BCKeyPerformanceIndicatorsTableBaselineColumn>Baseline</BCKeyPerformanceIndicatorsTableBaselineColumn>
                          <BCKeyPerformanceIndicatorsTableBaselineSelect></BCKeyPerformanceIndicatorsTableBaselineSelect>
                        </BCKeyPerformanceIndicatorsTableBaselineContainer>


                        <BCKeyPerformanceIndicatorsTableYear1Container>
                          <BCKeyPerformanceIndicatorsTableYear1Column>Year 1</BCKeyPerformanceIndicatorsTableYear1Column>
                          <BCKeyPerformanceIndicatorsTableYear1Select></BCKeyPerformanceIndicatorsTableYear1Select>
                        </BCKeyPerformanceIndicatorsTableYear1Container>


                        <BCKeyPerformanceIndicatorsTableYear2Container>
                          <BCKeyPerformanceIndicatorsTableYear2Column>Year 2</BCKeyPerformanceIndicatorsTableYear2Column>
                          <BCKeyPerformanceIndicatorsTableYear2Select></BCKeyPerformanceIndicatorsTableYear2Select>
                        </BCKeyPerformanceIndicatorsTableYear2Container>

                        <BCKeyPerformanceIndicatorsTableYear3Container>
                          <BCKeyPerformanceIndicatorsTableYear3Column>Year 3</BCKeyPerformanceIndicatorsTableYear3Column>
                          <BCKeyPerformanceIndicatorsTableYear3Select></BCKeyPerformanceIndicatorsTableYear3Select>
                        </BCKeyPerformanceIndicatorsTableYear3Container>

                        <BCKeyPerformanceIndicatorsTableYear4Container>
                          <BCKeyPerformanceIndicatorsTableYear4Column>Year 4</BCKeyPerformanceIndicatorsTableYear4Column>
                          <BCKeyPerformanceIndicatorsTableYear4Select></BCKeyPerformanceIndicatorsTableYear4Select>
                        </BCKeyPerformanceIndicatorsTableYear4Container>
                        
                        <BCKeyPerformanceIndicatorsTableYear5Container>
                          <BCKeyPerformanceIndicatorsTableYear5Column>Year 5</BCKeyPerformanceIndicatorsTableYear5Column>
                          <BCKeyPerformanceIndicatorsTableYear5Select></BCKeyPerformanceIndicatorsTableYear5Select>
                        </BCKeyPerformanceIndicatorsTableYear5Container>

                        {
                          kpis.map(kpi =>
                            <React.Fragment>
                              <BCKeyPerformanceIndicatorsKpiItemImpactType kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemImpactType>
                              <BCKeyPerformanceIndicatorsKpiItemIndicator kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemIndicator>
                              <BCKeyPerformanceIndicatorsKpiItemBaseline kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemBaseline>
                              <BCKeyPerformanceIndicatorsKpiItemYear1 kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemYear1>
                              <BCKeyPerformanceIndicatorsKpiItemYear2 kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemYear2>
                              <BCKeyPerformanceIndicatorsKpiItemYear3 kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemYear3>
                              <BCKeyPerformanceIndicatorsKpiItemYear4 kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemYear4>
                              <BCKeyPerformanceIndicatorsKpiItemYear5 kpi={kpi}></BCKeyPerformanceIndicatorsKpiItemYear5>
                            </React.Fragment>                      
                          )
                        }
                        <BCKeyPerformanceIndicatorsButtonsContainer data-html2canvas-ignore>

                          <BCKeyPerformanceIndicatorsAddKpiButtonContainer>
                            <BCKeyPerformanceIndicatorsAddKpiButton onClick={ addNewKPI }></BCKeyPerformanceIndicatorsAddKpiButton>
                            <BCKeyPerformanceIndicatorsAddKpiButtonLabel>
                              Add item
                            </BCKeyPerformanceIndicatorsAddKpiButtonLabel>
                          </BCKeyPerformanceIndicatorsAddKpiButtonContainer>

                          <BCKeyPerformanceIndicatorsDeleteKpiButtonContainer> 
                            <BCKeyPerformanceIndicatorsDeleteKpiButton onClick={ deleteAnKPI }></BCKeyPerformanceIndicatorsDeleteKpiButton>
                            <BCKeyPerformanceIndicatorsDeleteKpiButtonLabel>
                              Delete item
                            </BCKeyPerformanceIndicatorsDeleteKpiButtonLabel>
                          </BCKeyPerformanceIndicatorsDeleteKpiButtonContainer>

                        </BCKeyPerformanceIndicatorsButtonsContainer>

                      </BCKeyPerformanceIndicatorsTableContainer>
                    </BCKeyPerformanceIndicatorsContainer>
                  </BCKeyAssumpCashFlowImpactKeyPerformanceIndicatorsContainer>

                  <BCCashFlowGraphicContainer style={{overflow:'hidden'}}>

                    <BCCashFlowGraphic>
                      
                    </BCCashFlowGraphic>

                  </BCCashFlowGraphicContainer>

              </BCFormAndCashFlowGraphicContainer>

              <BCStyledPreviousNextLinkContainer data-html2canvas-ignore>
                <BCStyledPreviousLink to={process.env.PUBLIC_URL + "/create_project/solution_and_data"} > Previous </BCStyledPreviousLink>
                <BCStyledNextLink to={process.env.PUBLIC_URL + "/create_project/business_case_itens"} delay={100} pdfOnClick={savePdf}> Next </BCStyledNextLink>
              </BCStyledPreviousNextLinkContainer>

            </BCFormAndCashFlowGraphicContainerAndLabel>

          </BCMainContainer>
        </React.Fragment>
    )
}

export default BusinessCaseScreen
