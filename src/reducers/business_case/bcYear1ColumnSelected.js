const currentDate = new Date().getFullYear().toString()

const bcYear1ColumnSelected = (state = currentDate, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_1_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear1ColumnSelected