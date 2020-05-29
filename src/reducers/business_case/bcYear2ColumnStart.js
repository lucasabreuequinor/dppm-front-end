import { currentYear } from './constants'

const bcYear2ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_2_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bcYear2ColumnStart