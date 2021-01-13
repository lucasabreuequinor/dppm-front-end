import {combineReducers} from 'redux' 


function getCurrentDateFormated(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();

  return `${year}-${month}-${day}`
}

const projectPlan = (state, action) => {
  switch(action.type){
    case 'ADD_PROJECT_PLAN':
      return {
        id: action.id,
        project_plan_type: action.project_plan_type,
        activity: action.activity,
        begin: getCurrentDateFormated(),
        end: getCurrentDateFormated(),
      }

    case 'DELETE_PROJECT_PLAN':
      return state.id !== action.id

    case 'CHANGE_PROJECT_PLAN_PROJECT_PLAN_TYPE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        project_plan_type: action.project_plan_type
      };
    case 'CHANGE_PROJECT_PLAN_ACTIVITY':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        activity: action.activity
      };
    case 'CHANGE_PROJECT_PLAN_BEGIN':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        begin: action.begin
      };
    case 'CHANGE_PROJECT_PLAN_END':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        end: action.end
      };        
      default:
        return state;
  }
}

const projectPlans = (state = [], action) => {
  switch(action.type){
    case 'ADD_PROJECT_PLAN':
      return [
        ...state,
        projectPlan(undefined,action)
      ];

    case 'DELETE_PROJECT_PLAN':
      return state.filter(project_plan_item => projectPlan(project_plan_item,action))


    case 'CHANGE_PROJECT_PLAN_PROJECT_PLAN_TYPE':
      return state.map(project_plan_item => projectPlan(project_plan_item,action))
    case 'CHANGE_PROJECT_PLAN_ACTIVITY':
      return state.map(project_plan_item => projectPlan(project_plan_item,action))
    case 'CHANGE_PROJECT_PLAN_BEGIN':
      return state.map(project_plan_item => projectPlan(project_plan_item,action))                       
    case 'CHANGE_PROJECT_PLAN_END':
      return state.map(project_plan_item => projectPlan(project_plan_item,action))
    default:
    return state;
      
  }
}

const nextProjectPlanId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_PROJECT_PLAN_ID':
      return state + 1
    case 'DECREMENT_NEXT_PROJECT_PLAN_ID':
      return state - 1
    default:
      return state
  }
}

const maxProjectPlans = (state = 9, action) => {
  switch(action.type){
    default:
      return state
  }
}

const ppProjectPlans = combineReducers({
  nextProjectPlanId,
  maxProjectPlans,
  projectPlans,

})

export default ppProjectPlans
