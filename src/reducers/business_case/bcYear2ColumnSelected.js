import { currentYear } from './constants'

const bcYear2ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_2_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear2ColumnSelected