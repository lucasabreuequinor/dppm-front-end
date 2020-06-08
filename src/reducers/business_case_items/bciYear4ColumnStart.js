import { currentYear } from './constants'

const bciYear4ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_4_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bciYear4ColumnStart