const bcYear5ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_5_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bcYear5ColumnRange