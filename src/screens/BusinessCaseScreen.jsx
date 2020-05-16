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
  BCKeyPerformanceIndicatorsAddKpiButton,
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
      

class BusinessCaseScreen extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {

      kpis:[

      ],
      kpis_quantity: 0
    }
  
  }

  addkpi = (e) => {
    if(this.state.kpis_quantity < 18)
    {

      this.setState((state) => ({
        kpis: [...state.kpis,{impact_type:'', indicator:'', baseline: '', year1: '', year2: '', year3: '', year4: '', year5: ''}
      ],
      kpis_quantity: state.kpis_quantity + 1
      }))

    }

    e.preventDefault()
  }


  render(){
    console.log(this.state.kpis_quantity)
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

                          <BCCashFlowReviewedByOPAFCContainer>
                            
                            <BCCashFlowReviewedByOPAFCLabel>{"Reviewed by OPA/F&C?"}</BCCashFlowReviewedByOPAFCLabel>
                            <BCCashFlowReviewedByOPAFCInput></BCCashFlowReviewedByOPAFCInput>
                          
                          </BCCashFlowReviewedByOPAFCContainer>

                          <BCCashFlowReviewedByOPAFCContainer>
                            
                            <BCCashFlowReviewedByOPAFCLabel>{"Reviewed by OPA/F&C?"}</BCCashFlowReviewedByOPAFCLabel>
                            <BCCashFlowReviewedByOPAFCInput></BCCashFlowReviewedByOPAFCInput>
                          
                          </BCCashFlowReviewedByOPAFCContainer>

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
                          this.state.kpis.map((kpi, index) =>
                          index % 2 != 0 ?
                            <React.Fragment>
                              <BCKeyPerformanceIndicatorsKpiItemImpactType style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemImpactType>
                              <BCKeyPerformanceIndicatorsKpiItemIndicator style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemIndicator>
                              <BCKeyPerformanceIndicatorsKpiItemBaseline style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemBaseline>
                              <BCKeyPerformanceIndicatorsKpiItemYear1 style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemYear1>
                              <BCKeyPerformanceIndicatorsKpiItemYear2 style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemYear2>
                              <BCKeyPerformanceIndicatorsKpiItemYear3 style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemYear3>
                              <BCKeyPerformanceIndicatorsKpiItemYear4 style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemYear4>
                              <BCKeyPerformanceIndicatorsKpiItemYear5 style={{backgroundColor:'#b3c7c9'}}></BCKeyPerformanceIndicatorsKpiItemYear5>
                            </React.Fragment>
                          :
                            <React.Fragment>
                              <BCKeyPerformanceIndicatorsKpiItemImpactType style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemImpactType>
                              <BCKeyPerformanceIndicatorsKpiItemIndicator style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemIndicator>
                              <BCKeyPerformanceIndicatorsKpiItemBaseline style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemBaseline>
                              <BCKeyPerformanceIndicatorsKpiItemYear1 style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemYear1>
                              <BCKeyPerformanceIndicatorsKpiItemYear2 style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemYear2>
                              <BCKeyPerformanceIndicatorsKpiItemYear3 style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemYear3>
                              <BCKeyPerformanceIndicatorsKpiItemYear4 style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemYear4>
                              <BCKeyPerformanceIndicatorsKpiItemYear5 style={{backgroundColor:'#E0E0E0'}}></BCKeyPerformanceIndicatorsKpiItemYear5>
                            </React.Fragment>                        
                          )
                        }
                        <BCKeyPerformanceIndicatorsAddKpiButton onClick={ this.addkpi }></BCKeyPerformanceIndicatorsAddKpiButton>

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
}

export default BusinessCaseScreen
