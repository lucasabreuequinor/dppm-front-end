import bcBaselineColumn from './bcBaselineColumn'
import bcYear1Column from './bcYear1Column'
import bcYear2Column from './bcYear2Column'
import bcYear3Column from './bcYear3Column'
import bcYear4Column from './bcYear4Column'
import bcYear5Column from './bcYear5Column'


import {combineReducers} from 'redux' 


const kpi = (state, action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_KPI':
      return {
        id: action.id,
        impact_type: {
          selected: "",
          values: ["", "outcome", "performance", "progress"]
        },
        indicator: {
          selected: "",
          outcome: {
            selected: "",
            values: ["", 'OPEX', 'CAPEX', 'PE', 'MPP', 'CO2', 'Saved Hours']
          },
          performance: {
            selected: "",
            values: ["", 'a', 'b', 'c', 'd']
          },
          progress: {
            selected: "",
            values: ["", 'e', 'f', 'g', 'h']
          },
        },
        baseline: action.baseline,
        year1: action.year1,
        year2: action.year2,
        year3: action.year3,
        year4: action.year4,
        year5: action.year5,
      }

    case 'DELETE_KPI':
      return state.id !== action.id

    case 'CHANGE_KPI_IMPACT_TYPE_SELECTED':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        impact_type: {...state.impact_type, selected: action.selected }
      };
    case 'CHANGE_KPI_INDICATOR_SELECTED':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        indicator: {...state.indicator, selected: action.selected}
      };
    case 'CHANGE_KPI_BASELINE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        baseline: action.baseline
      };
    case 'CHANGE_KPI_YEAR_1':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year1: action.year1
      };
    case 'CHANGE_KPI_YEAR_2':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year2: action.year2
      };
    case 'CHANGE_KPI_YEAR_3':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year3: action.year3
      };
    case 'CHANGE_KPI_YEAR_4':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year4: action.year4
      }; 
    case 'CHANGE_KPI_YEAR_5':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year5: action.year5
      };                           
      default:
        return state;
  }
}

const kpis = (state = [], action) => {
  
  switch(action.type){
    case 'ADD_KPI':
      return [
        ...state,
        kpi(undefined,action)
      ];

    case 'DELETE_KPI':
      return state.filter(kpi_item => kpi(kpi_item,action))


    case 'CHANGE_KPI_IMPACT_TYPE_SELECTED':
      return state.map(kpi_item => kpi(kpi_item,action))
    case 'CHANGE_KPI_INDICATOR_SELECTED':
      return state.map(kpi_item => kpi(kpi_item,action))
      case 'CHANGE_KPI_BASELINE':
        return state.map(kpi_item => kpi(kpi_item,action))
      case 'CHANGE_KPI_YEAR_1':
        return state.map(kpi_item => kpi(kpi_item,action))
      case 'CHANGE_KPI_YEAR_2':
        return state.map(kpi_item => kpi(kpi_item,action))
      case 'CHANGE_KPI_YEAR_3':
        return state.map(kpi_item => kpi(kpi_item,action)) 
      case 'CHANGE_KPI_YEAR_4':
        return state.map(kpi_item => kpi(kpi_item,action))
      case 'CHANGE_KPI_YEAR_5':
        return state.map(kpi_item => kpi(kpi_item,action))                         
    default:
      return state;
      
  }
}

const nextKpiId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_KPI_ID':
      return state + 1
    case 'DECREMENT_NEXT_KPI_ID':
      return state - 1
    default:
      return state
  }
}

const maxKpis = (state = 7, action) => {
  switch(action.type){
    default:
      return state
  }
}

const bcKPIs = combineReducers({
  nextKpiId,
  maxKpis,
  bcBaselineColumn,
  bcYear1Column,
  bcYear2Column,
  bcYear3Column,
  bcYear4Column,
  bcYear5Column,
  kpis
})


export default bcKPIs





