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
  BCKeyPerformanceIndicatorsTableBaselineColumn,
  BCKeyPerformanceIndicatorsTableYear1Column,
  BCKeyPerformanceIndicatorsTableYear2Column,
  BCKeyPerformanceIndicatorsTableYear3Column,
  BCKeyPerformanceIndicatorsTableYear4Column,
  BCKeyPerformanceIndicatorsTableYear5Column,
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
  BCCashFlowGraphic
  }
  from "../components/business_case_screen"

import { useSelector, useDispatch } from 'react-redux'
import { addKPI, changeKPIImpactType } from '../actions/business_case'
let nextKpiId=0;

const BusinessCaseScreen = () => {

  
  const kpis = useSelector(state => state.bcReducers.bcKPIs.kpis);
  const nextKpiId = useSelector(state => state.bcReducers.bcKPIs.nextKpiId);
  const maxKpis = useSelector(state => state.bcReducers.bcKPIs.maxKpis);

  const dispatch = useDispatch(); 


  // constructor(props){
  //   super(props)
    
  //   this.state = {

  //     kpis:[

  //     ],
  //     kpis_quantity: 0
  //   }
  
  // }
  const addNewKPI = (e) => {
    
    if(kpis.length < 5)
    {
      dispatch(addKPI(
                {
                  id: nextKpiId,
                  impact_type: 'production',
                  indicator: 'oil',
                  baseline: 2015,
                  year1: 2017,
                  year2: 2018,
                  year3: 2019,
                  year4: 2020,
                  year5: 2022,
                }
      ))
      dispatch({type: 'INCREMENT_NEXT_KPI_ID'})
    }
    else
      alert("Maximum KPIs: 5")

    
    // if(this.state.kpis_quantity < 5)
    // {

    //   this.setState((state) => ({
    //     kpis: [...state.kpis,{impact_type:'', indicator:'', baseline: '', year1: '', year2: '', year3: '', year4: '', year5: ''}
    //   ],
    //   kpis_quantity: state.kpis_quantity + 1
    //   }))

    // }

    e.preventDefault()
  }

    // console.log(this.state.kpis_quantity)
    return(
        <React.Fragment>
          <BCMainContainer>
            <BCFormAndCashFlowGraphicContainerAndLabel>

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
                        <BCKeyPerformanceIndicatorsTableBaselineColumn>Baseline</BCKeyPerformanceIndicatorsTableBaselineColumn>
                        <BCKeyPerformanceIndicatorsTableYear1Column>Year 1</BCKeyPerformanceIndicatorsTableYear1Column>
                        <BCKeyPerformanceIndicatorsTableYear2Column>Year 2</BCKeyPerformanceIndicatorsTableYear2Column>
                        <BCKeyPerformanceIndicatorsTableYear3Column>Year 3</BCKeyPerformanceIndicatorsTableYear3Column>
                        <BCKeyPerformanceIndicatorsTableYear4Column>Year 4</BCKeyPerformanceIndicatorsTableYear4Column>
                        <BCKeyPerformanceIndicatorsTableYear5Column>Year 5</BCKeyPerformanceIndicatorsTableYear5Column>
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
                        <BCKeyPerformanceIndicatorsButtonsContainer>
                          <BCKeyPerformanceIndicatorsAddKpiButtonContainer>
                            <BCKeyPerformanceIndicatorsAddKpiButton onClick={ addNewKPI }></BCKeyPerformanceIndicatorsAddKpiButton>
                            <BCKeyPerformanceIndicatorsAddKpiButtonLabel>
                              Add item
                            </BCKeyPerformanceIndicatorsAddKpiButtonLabel>
                          </BCKeyPerformanceIndicatorsAddKpiButtonContainer>

                          <BCKeyPerformanceIndicatorsDeleteKpiButtonContainer>
                            <BCKeyPerformanceIndicatorsDeleteKpiButton onClick={ addNewKPI }></BCKeyPerformanceIndicatorsDeleteKpiButton>
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
            </BCFormAndCashFlowGraphicContainerAndLabel>

          </BCMainContainer>
        </React.Fragment>
    )
}

export default BusinessCaseScreen
