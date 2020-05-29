import { currentYear } from './constants'

const bcYear4ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_4_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bcYear4ColumnStart