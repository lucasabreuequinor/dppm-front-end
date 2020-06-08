import {combineReducers} from 'redux' 


const productionItem = (state, action) => {
  switch(action.type){
    case 'ADD_PRODUCTION_ITEM':
      return {
        id: action.id,
        item: action.item,
        production_type: action.production_type,
        baseline: action.baseline,
        year1: action.year1,
        year2: action.year2,
        year3: action.year3,
        year4: action.year4,
        year5: action.year5,
        total: action.total,
        assumptionsComments: action.assumptionsComments
      }

    case 'DELETE_PRODUCTION_ITEM':
      return state.id !== action.id

    case 'CHANGE_PRODUCTION_ITEM_ITEM':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        item: action.item
      };
    case 'CHANGE_PRODUCTION_ITEM_PRODUCTION_TYPE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        production_type: action.production_type
      };
    case 'CHANGE_PRODUCTION_ITEM_BASELINE':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        baseline: action.baseline
      };
    case 'CHANGE_PRODUCTION_ITEM_YEAR_1':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year1: action.year1
      };
    case 'CHANGE_PRODUCTION_ITEM_YEAR_2':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year2: action.year2
      };
    case 'CHANGE_PRODUCTION_ITEM_YEAR_3':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year3: action.year3
      };
    case 'CHANGE_PRODUCTION_ITEM_YEAR_4':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year4: action.year4
      }; 
    case 'CHANGE_PRODUCTION_ITEM_YEAR_5':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        year5: action.year5
      };
    case 'CHANGE_PRODUCTION_ITEM_TOTAL':
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        total: action.total
      }; 
    case 'CHANGE_PRODUCTION_ITEM_ASSUMPTIONS_COMMENTS':
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

const productionItems = (state = [], action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_PRODUCTION_ITEM':
      return [
        ...state,
        productionItem(undefined,action)
      ];

    case 'DELETE_PRODUCTION_ITEM':
      return state.filter(productionItem_item => productionItem(productionItem_item,action))


    case 'CHANGE_PRODUCTION_ITEM_ITEM':
      return state.map(productionItem_item => productionItem(productionItem_item,action))
    case 'CHANGE_PRODUCTION_ITEM_PRODUCTION_TYPE':
      return state.map(productionItem_item => productionItem(productionItem_item,action))
      case 'CHANGE_PRODUCTION_ITEM_BASELINE':
        return state.map(productionItem_item => productionItem(productionItem_item,action))
      case 'CHANGE_PRODUCTION_ITEM_YEAR_1':
        return state.map(productionItem_item => productionItem(productionItem_item,action))
      case 'CHANGE_PRODUCTION_ITEM_YEAR_2':
        return state.map(productionItem_item => productionItem(productionItem_item,action))
      case 'CHANGE_PRODUCTION_ITEM_YEAR_3':
        return state.map(productionItem_item => productionItem(productionItem_item,action)) 
      case 'CHANGE_PRODUCTION_ITEM_YEAR_4':
        return state.map(productionItem_item => productionItem(productionItem_item,action))
      case 'CHANGE_PRODUCTION_ITEM_YEAR_5':
        return state.map(productionItem_item => productionItem(productionItem_item,action))
      case 'CHANGE_PRODUCTION_ITEM_TOTAL':
        return state.map(productionItem_item => productionItem(productionItem_item,action)) 
      case 'CHANGE_PRODUCTION_ITEM_ASSUMPTIONS_COMMENTS':
        return state.map(productionItem_item => productionItem(productionItem_item,action))                          
    default:
      return state;
      
  }
}

const nextProductionItemId = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT_NEXT_PRODUCTION_ITEM_ID':
      return state + 1
    case 'DECREMENT_NEXT_PRODUCTION_ITEM_ID':
      return state - 1
    default:
      return state
  }
}

const maxProductionItems = (state = 1, action) => {
  switch(action.type){
    default:
      return state
  }
}

const bciProductionItems = combineReducers({
  nextProductionItemId,
  maxProductionItems,
  productionItems,

})

export default bciProductionItems
