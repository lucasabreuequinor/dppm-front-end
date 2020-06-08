const bciYear2ColumnRange = (state = 5, action) => {
  switch(action.type){
    case 'CHANGE_YEAR_2_COLUMN_RANGE':
      return action.range
    default:
      return state
  }
}

export default bciYear2ColumnRange