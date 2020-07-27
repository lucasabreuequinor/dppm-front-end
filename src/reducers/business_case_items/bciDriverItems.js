import {combineReducers} from 'redux' 


const driverItem = (state, action) => {
  switch(action.type){
    case 'ADD_DRIVER_ITEM':
      return {
        id: action.id,
        driver: action.driver,
        enabler: action.enabler,
        driver_item_action: action.driver_item_action,
        feasibility: action.feasibility,
      }

    case 'DELETE_DRIVER_ITEM':
      return state.id !== action.id      

    case 'CHANGE_DRIVER_ITEM_DRIVER':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        driver: action.driver
      };
    case 'CHANGE_DRIVER_ITEM_ENABLER':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        enabler: action.enabler
      };
    case 'CHANGE_DRIVER_ITEM_DRIVER_ITEM_ACTION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        driver_item_action: action.driver_item_action
      };
    case 'CHANGE_DRIVER_ITEM_FEASIBILITY':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        feasibility: action.feasibility
      };       
      default:
        return state;
  }
}

const driverItems = (state = [], action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_DRIVER_ITEM':
      return [
        ...state,
        driverItem(undefined,action)
      ];

    case 'DELETE_DRIVER_ITEM':
      return state.filter(driverItem_item => driverItem(driverItem_item,action))


    case 'CHANGE_DRIVER_ITEM_DRIVER':
      return state.map(driverItem_item => driverItem(driverItem_item,action))
    case 'CHANGE_DRIVER_ITEM_ENABLER':
      return state.map(driverItem_item => driverItem(driverItem_item,action))
    case 'CHANGE_DRIVER_ITEM_DRIVER_ITEM_ACTION':
      return state.map(driverItem_item => driverItem(driverItem_item,action))
    case 'CHANGE_DRIVER_ITEM_FEASIBILITY':
      return state.map(driverItem_item => driverItem(driverItem_item,action))                     
    default:
      return state;
      
  }
}

const nextDriverItemId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_DRIVER_ITEM_ID':
      return state + 1
    case 'DECREMENT_NEXT_DRIVER_ITEM_ID':
      return state - 1
    default:
      return state
  }
}

const maxDriverItems = (state = 7, action) => {
  switch(action.type){
    default:
      return state
  }
}

const bciDriverItems = combineReducers({
  nextDriverItemId,
  maxDriverItems,
  driverItems,

})

export default bciDriverItems
