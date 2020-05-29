const bcYear2ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_2_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bcYear2ColumnRange