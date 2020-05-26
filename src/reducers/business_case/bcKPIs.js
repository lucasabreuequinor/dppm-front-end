import {combineReducers} from 'redux' 

const kpi = (state, action) => {
  switch(action.type){
    case 'ADD_KPI':
      return {
        id: action.id,
        impact_type: action.impact_type,
        indicator: action.indicator,
        baseline: action.baseline,
        year1: action.year1,
        year2: action.year2,
        year3: action.year3,
        year4: action.year4,
        year5: action.year5,
      }
    case 'CHANGE_KPI_IMPACT_TYPE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        impact_type: action.impact_type
      };
    case 'CHANGE_KPI_INDICATOR':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        indicator: action.indicator
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
    case 'CHANGE_KPI_IMPACT_TYPE':
      return state.map(kpi_item => kpi(kpi_item,action))
    case 'CHANGE_KPI_INDICATOR':
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
    default:
      return state
  }
}

const maxKpis = (state = 5, action) => {
  switch(action.type){
    default:
      return state
  }
}

const bcKPIs = combineReducers({
  nextKpiId,
  maxKpis,
  kpis
})


export default bcKPIs





