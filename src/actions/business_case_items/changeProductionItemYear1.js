const changeProductionItemYear1 = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_YEAR_1',
    year1: item.year1,
    id: item.id
  }
}

export default changeProductionItemYear1