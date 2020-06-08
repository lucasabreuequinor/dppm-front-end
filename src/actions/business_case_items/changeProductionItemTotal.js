const changeProductionItemTotal = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_TOTAL',
    total: item.total,
    id: item.id
  }
}

export default changeProductionItemTotal