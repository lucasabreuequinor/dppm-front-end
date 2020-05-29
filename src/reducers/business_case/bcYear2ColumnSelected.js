const currentDate = new Date().getFullYear().toString()

const bcYear2ColumnSelected = (state = currentDate, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_2_COLUMN_SELECTED':
      return action.selected
    default:
      return state
  }
}

export default bcYear2ColumnSelected