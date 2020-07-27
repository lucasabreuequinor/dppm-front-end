import {combineReducers} from 'redux' 


const costItem = (state, action) => {
  switch(action.type){
    case 'ADD_COST_ITEM':
      return {
        id: action.id,
        item: action.item, 
        cost_type: action.cost_type,
        baseline: action.baseline,
        year1: action.year1,
        year2: action.year2,
        year3: action.year3,
        year4: action.year4,
        year5: action.year5,
        total: action.total,
        assumptionsComments: action.assumptionsComments
      }

    case 'DELETE_COST_ITEM':
      return state.id !== action.id

    case 'CHANGE_COST_ITEM_ITEM':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        item: action.item
      };
    case 'CHANGE_COST_ITEM_COST_TYPE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        cost_type: action.cost_type
      };
    case 'CHANGE_COST_ITEM_BASELINE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        baseline: action.baseline
      };
    case 'CHANGE_COST_ITEM_YEAR_1':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year1: action.year1
      };
    case 'CHANGE_COST_ITEM_YEAR_2':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year2: action.year2
      };
    case 'CHANGE_COST_ITEM_YEAR_3':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year3: action.year3
      };
    case 'CHANGE_COST_ITEM_YEAR_4':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year4: action.year4
      }; 
    case 'CHANGE_COST_ITEM_YEAR_5':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year5: action.year5
      };
    case 'CHANGE_COST_ITEM_TOTAL':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        total: action.total
      }; 
    case 'CHANGE_COST_ITEM_ASSUMPTIONS_COMMENTS':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        assumptionsComments: action.assumptionsComments
      };                 
      default:
        return state;
  }
}

const costItems = (state = [], action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_COST_ITEM':
      return [
        ...state,
        costItem(undefined,action)
      ];

    case 'DELETE_COST_ITEM':
      return state.filter(costItem_item => costItem(costItem_item,action))


    case 'CHANGE_COST_ITEM_ITEM':
      return state.map(costItem_item => costItem(costItem_item,action))
    case 'CHANGE_COST_ITEM_COST_TYPE':
      return state.map(costItem_item => costItem(costItem_item,action))
      case 'CHANGE_COST_ITEM_BASELINE':
        return state.map(costItem_item => costItem(costItem_item,action))
      case 'CHANGE_COST_ITEM_YEAR_1':
        return state.map(costItem_item => costItem(costItem_item,action))
      case 'CHANGE_COST_ITEM_YEAR_2':
        return state.map(costItem_item => costItem(costItem_item,action))
      case 'CHANGE_COST_ITEM_YEAR_3':
        return state.map(costItem_item => costItem(costItem_item,action)) 
      case 'CHANGE_COST_ITEM_YEAR_4':
        return state.map(costItem_item => costItem(costItem_item,action))
      case 'CHANGE_COST_ITEM_YEAR_5':
        return state.map(costItem_item => costItem(costItem_item,action))
      case 'CHANGE_COST_ITEM_TOTAL':
        return state.map(costItem_item => costItem(costItem_item,action)) 
      case 'CHANGE_COST_ITEM_ASSUMPTIONS_COMMENTS':
        return state.map(costItem_item => costItem(costItem_item,action))                          
    default:
      return state;
      
  }
}

const nextCostItemId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_COST_ITEM_ID':
      return state + 1
    case 'DECREMENT_NEXT_COST_ITEM_ID':
      return state - 1
    default:
      return state
  }
}

const maxCostItems = (state = 7, action) => {
  switch(action.type){
    default:
      return state
  }
}

const bciCostItems = combineReducers({
  nextCostItemId,
  maxCostItems,
  costItems,

})

export default bciCostItems
