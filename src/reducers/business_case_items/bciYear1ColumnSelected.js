import { currentYear } from './constants'

const bciYear1ColumnSelected = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bciYear1ColumnSelected