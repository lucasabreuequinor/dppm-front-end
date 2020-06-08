import { currentYear } from './constants'

const bciYear4ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_4_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bciYear4ColumnSelected