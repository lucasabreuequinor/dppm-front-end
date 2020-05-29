const currentDate = new Date().getFullYear().toString()

const bcYear3ColumnSelected = (state = currentDate, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_3_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear3ColumnSelected