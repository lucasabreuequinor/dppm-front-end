import {combineReducers} from 'redux' 


const changeMgmtItem = (state, action) => {
  switch(action.type){
    case 'ADD_CHANGE_MGMT_ITEM':
      return {
        id: action.id,
        requirement: action.requirement,
        status: action.status,
        follow_up_action: action.follow_up_action,
        reviewed_approved: action.reviewed_approved,
      }

    case 'DELETE_CHANGE_MGMT_ITEM':
      return state.id !== action.id

    case 'CHANGE_CHANGE_MGMT_ITEM_REQUIREMENT':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        requirement: action.requirement
      };
    case 'CHANGE_CHANGE_MGMT_ITEM_STATUS': 
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        status: action.status
      };
    case 'CHANGE_CHANGE_MGMT_ITEM_FOLLOW_UP_ACTION':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        follow_up_action: action.follow_up_action
      };
    case 'CHANGE_CHANGE_MGMT_ITEM_REVIEWED_APPROVED':
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

const changeMgmtItems = (state = [], action) => {
  switch(action.type){
    case 'ADD_CHANGE_MGMT_ITEM':
      return [
        ...state,
        changeMgmtItem(undefined,action)
      ];

    case 'DELETE_CHANGE_MGMT_ITEM':
      return state.filter(changeMgmtItem_item => changeMgmtItem(changeMgmtItem_item,action))


    case 'CHANGE_CHANGE_MGMT_ITEM_REQUIREMENT':
      return state.map(changeMgmtItem_item => changeMgmtItem(changeMgmtItem_item,action))
    case 'CHANGE_CHANGE_MGMT_ITEM_STATUS':
      return state.map(changeMgmtItem_item => changeMgmtItem(changeMgmtItem_item,action))
      case 'CHANGE_CHANGE_MGMT_ITEM_FOLLOW_UP_ACTION':
        return state.map(changeMgmtItem_item => changeMgmtItem(changeMgmtItem_item,action))
      case 'CHANGE_CHANGE_MGMT_ITEM_REVIEWED_APPROVED':
        return state.map(changeMgmtItem_item => changeMgmtItem(changeMgmtItem_item,action))                      
      default:
        return state;
      
  }
}

const nextChangeMgmtItemId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_CHANGE_MGMT_ITEM_ID':
      return state + 1
    case 'DECREMENT_NEXT_CHANGE_MGMT_ITEM_ID':
      return state - 1
    default:
      return state
  }
}

const maxChangeMgmtItems = (state = 5, action) => {
  switch(action.type){
    default:
      return state
  }
}

const lpcmChangeMgmtItems = combineReducers({
  nextChangeMgmtItemId,
  maxChangeMgmtItems,
  changeMgmtItems,

})

export default lpcmChangeMgmtItems
