const currentDate = new Date().getFullYear().toString()

const bcYear5ColumnSelected = (state = currentDate, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_5_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear5ColumnSelected