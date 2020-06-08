import { currentYear } from './constants'

const bcYear3ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_3_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear3ColumnSelected