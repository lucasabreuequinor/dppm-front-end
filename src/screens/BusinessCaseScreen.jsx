import React from "react";
import {
  BCMainContainer,
  BCFormAndCashFlowGraphicContainerAndLabel,
  BCLabel,
  BCFormAndCashFlowGraphicContainer,
  BCFormsContainer,
  BCKeyAssumpKeyPerformanceIndicatorsContainer,
  BCKeyAssumpContainer,
  BCKeyAssumpLabel,
  BCKeyAssumpTextArea,
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
  BCKeyPerformanceIndicatorsTableYear5Column

  }
  from "../components/business_case_screen"
      

class BusinessCaseScreen extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {

      kpis:[

      ],
      kips_quantity: 0
    }
  
  }

  addkpi = (e) => {
    this.setState((state) => ({
      kpis: [...state.kpis,{impact_type:'', indicator:'', baseline: '', year1: '', year2: '', year3: '', year4: '', year5: ''}
    ]
    }))
    e.preventDefault()
  }


  render(){
    return(
        <React.Fragment>
          <BCMainContainer>
            <BCFormAndCashFlowGraphicContainerAndLabel>

              <BCLabel>Business Case</BCLabel>

              <BCFormAndCashFlowGraphicContainer>
                <BCFormsContainer>

                  <BCKeyAssumpKeyPerformanceIndicatorsContainer>

                    <BCKeyAssumpContainer>  
                      <BCKeyAssumpLabel>Key assumptions:</BCKeyAssumpLabel>
                      <BCKeyAssumpTextArea></BCKeyAssumpTextArea>
                    </BCKeyAssumpContainer>

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
                          this.state.kpis.map(kpi => 
                          <React.Fragment>
                            <div>{kpi.impact_type}</div>  
                            <div style={{backgroundColor:'#DCDCDC'}}>{kpi.indicator}</div>  
                            <div>{kpi.baseline}</div>  
                            <div>{kpi.year1}</div>  
                            <div>{kpi.year2}</div>  
                            <div>{kpi.year3}</div>
                            <div>{kpi.year4}</div>
                            <div>{kpi.year5}</div>  
                          </React.Fragment>
                          )
                        }

                      </BCKeyPerformanceIndicatorsTableContainer>
                    </BCKeyPerformanceIndicatorsContainer>
                    <button onClick={ this.addkpi }> + </button>
                  </BCKeyAssumpKeyPerformanceIndicatorsContainer>

                </BCFormsContainer>

              </BCFormAndCashFlowGraphicContainer>
            </BCFormAndCashFlowGraphicContainerAndLabel>
          </BCMainContainer>
        </React.Fragment>
    )
  }
}

export default BusinessCaseScreen
