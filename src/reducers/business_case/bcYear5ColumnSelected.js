import { currentYear } from './constants'

const bcYear5ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_5_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear5ColumnSelected