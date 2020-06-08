import { currentYear } from './constants'

const bcYear4ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_4_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear4ColumnSelected