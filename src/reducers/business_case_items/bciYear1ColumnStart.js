import { currentYear } from './constants'
 
const bciYear1ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bciYear1ColumnStart