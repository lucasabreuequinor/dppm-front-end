import { currentYear } from './constants'
 
const bcYear1ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bcYear1ColumnStart