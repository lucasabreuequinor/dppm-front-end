import { currentYear } from './constants'

const bcYear1ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear1ColumnSelected