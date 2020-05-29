import { currentYear } from './constants'

const bcYear3ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_3_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bcYear3ColumnStart