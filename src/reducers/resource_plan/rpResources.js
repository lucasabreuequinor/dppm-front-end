import {combineReducers} from 'redux' 

function getCurrentDateFormated(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();

  return `${year}-${month}-${day}`
}

const resource = (state, action) => {
  switch(action.type){
    case 'ADD_RESOURCE':
      return {
        id: action.id,
        resource_owner: action.resource_owner,
        role_required: action.role_required,
        name: action.name,
        allocation: action.allocation,
        start_date: getCurrentDateFormated(),
        duration: action.duration
      }

    case 'DELETE_RESOURCE':
      return state.id !== action.id

    case 'CHANGE_RESOURCE_RESOURCE_OWNER':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        resource_owner: action.resource_owner
      };
    case 'CHANGE_RESOURCE_ROLE_REQUIRED':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        role_required: action.role_required
      };
    case 'CHANGE_RESOURCE_NAME':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        name: action.name
      };
    case 'CHANGE_RESOURCE_ALLOCATION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        allocation: action.allocation
      };
    case 'CHANGE_RESOURCE_START_DATE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        start_date: action.start_date
      };
    case 'CHANGE_RESOURCE_DURATION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        duration: action.duration
      };            
      default:
        return state;
  }
}

const resources = (state = [], action) => {
  switch(action.type){
    case 'ADD_RESOURCE':
      return [
        ...state,
        resource(undefined,action)
      ];

    case 'DELETE_RESOURCE':
      return state.filter(resource_item => resource(resource_item,action))


    case 'CHANGE_RESOURCE_RESOURCE_OWNER':
      return state.map(resource_item => resource(resource_item,action))
    case 'CHANGE_RESOURCE_ROLE_REQUIRED':
      return state.map(resource_item => resource(resource_item,action))
      case 'CHANGE_RESOURCE_NAME':
        return state.map(resource_item => resource(resource_item,action))
      case 'CHANGE_RESOURCE_ALLOCATION':
        return state.map(resource_item => resource(resource_item,action))
      case 'CHANGE_RESOURCE_START_DATE':
        return state.map(resource_item => resource(resource_item,action))
      case 'CHANGE_RESOURCE_DURATION':
        return state.map(resource_item => resource(resource_item,action))                         
      default:
        return state;
      
  }
}

const nextResourceId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_RESOURCE_ID':
      return state + 1
    case 'DECREMENT_NEXT_RESOURCE_ID':
      return state - 1
    default:
      return state
  }
}

const maxResources = (state = 5, action) => {
  switch(action.type){
    default:
      return state
  }
}

const rpResources = combineReducers({
  nextResourceId,
  maxResources,
  resources,

})

export default rpResources
