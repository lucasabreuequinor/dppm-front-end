import { currentYear } from './constants'

const bciYear3ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_3_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bciYear3ColumnStart