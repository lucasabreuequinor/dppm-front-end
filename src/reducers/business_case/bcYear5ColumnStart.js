import { currentYear } from './constants'

const bcYear5ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_5_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bcYear5ColumnStart