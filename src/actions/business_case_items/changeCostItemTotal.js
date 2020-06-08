const changeCostItemTotal = (item) => {
  return {
    type: 'CHANGE_COST_ITEM_TOTAL',
    total: item.total,
    id: item.id
  }
}

export default changeCostItemTotal