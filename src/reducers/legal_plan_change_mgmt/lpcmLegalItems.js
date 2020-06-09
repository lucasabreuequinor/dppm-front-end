import {combineReducers} from 'redux' 


const legalItem = (state, action) => {
  switch(action.type){
    case 'ADD_LEGAL_ITEM':
      return {
        id: action.id,
        requirement: action.requirement,
        status: action.status,
        follow_up_action: action.follow_up_action,
        reviewed_approved: action.reviewed_approved,
      }

    case 'DELETE_LEGAL_ITEM':
      return state.id !== action.id

    case 'CHANGE_LEGAL_ITEM_REQUIREMENT': 
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        requirement: action.requirement
      };
    case 'CHANGE_LEGAL_ITEM_STATUS':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        status: action.status
      };
    case 'CHANGE_LEGAL_ITEM_FOLLOW_UP_ACTION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        follow_up_action: action.follow_up_action
      };
    case 'CHANGE_LEGAL_ITEM_REVIEWED_APPROVED':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        reviewed_approved: action.reviewed_approved
      };
      default:
        return state;
  }
}

const legalItems = (state = [], action) => {
  switch(action.type){
    case 'ADD_LEGAL_ITEM':
      return [
        ...state,
        legalItem(undefined,action)
      ];

    case 'DELETE_LEGAL_ITEM':
      return state.filter(legalItem_item => legalItem(legalItem_item,action))


    case 'CHANGE_LEGAL_ITEM_REQUIREMENT':
      return state.map(legalItem_item => legalItem(legalItem_item,action))
    case 'CHANGE_LEGAL_ITEM_STATUS':
      return state.map(legalItem_item => legalItem(legalItem_item,action))
      case 'CHANGE_LEGAL_ITEM_FOLLOW_UP_ACTION':
        return state.map(legalItem_item => legalItem(legalItem_item,action))
      case 'CHANGE_LEGAL_ITEM_REVIEWED_APPROVED':
        return state.map(legalItem_item => legalItem(legalItem_item,action))                      
      default:
        return state;
      
  }
}

const nextLegalItemId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_LEGAL_ITEM_ID':
      return state + 1
    case 'DECREMENT_NEXT_LEGAL_ITEM_ID':
      return state - 1
    default:
      return state
  }
}

const maxLegalItems = (state = 7, action) => {
  switch(action.type){
    default:
      return state
  }
}

const lpcmLegalItems = combineReducers({
  nextLegalItemId,
  maxLegalItems,
  legalItems,

})

export default lpcmLegalItems
