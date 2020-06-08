import { currentYear } from './constants'

const bciYear3ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_3_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bciYear3ColumnSelected