import {combineReducers} from 'redux' 


const risk = (state, action) => {
  switch(action.type){
    case 'ADD_RISK':
      return {
        id: action.id,
        description: action.description,
        impact: action.impact,
        mitigating_action: action.mitigating_action
      }

    case 'DELETE_RISK':
      return state.id !== action.id

    case 'CHANGE_RISK_DESCRIPTION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        description: action.description
      };
    case 'CHANGE_RISK_IMPACT':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        impact: action.impact
      };
    case 'CHANGE_RISK_MITIGATING_ACTION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        mitigating_action: action.mitigating_action
      };  
      default:
        return state;
  }
}

const risks = (state = [], action) => {
  switch(action.type){
    case 'ADD_RISK':
      return [
        ...state,
        risk(undefined,action)
      ];

    case 'DELETE_RISK':
      return state.filter(risk_item => risk(risk_item,action))


    case 'CHANGE_RISK_DESCRIPTION':
      return state.map(risk_item => risk(risk_item,action))
    case 'CHANGE_RISK_IMPACT':
      return state.map(risk_item => risk(risk_item,action))
    case 'CHANGE_RISK_MITIGATING_ACTION':
      return state.map(risk_item => risk(risk_item,action))                       
    default:
      return state;
      
  }
}

const nextRiskId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_RISK_ID':
      return state + 1
    case 'DECREMENT_NEXT_RISK_ID':
      return state - 1
    default:
      return state
  }
}

const maxRisks = (state = 5, action) => {
  switch(action.type){
    default:
      return state
  }
}

const rrRisks = combineReducers({
  nextRiskId,
  maxRisks,
  risks,

})

export default rrRisks
