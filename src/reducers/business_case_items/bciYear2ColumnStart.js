import { currentYear } from './constants'

const bciYear2ColumnStart = (state = currentYear, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_2_COLUMN_START':
      return action.selected
    default:
      return state
  }
}

export default bciYear2ColumnStart