import { currentYear } from './constants'

const bciYear5ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_5_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bciYear5ColumnSelected