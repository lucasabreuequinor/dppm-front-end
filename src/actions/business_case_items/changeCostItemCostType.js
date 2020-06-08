const changeCostItemCostType = (item) => {
  return {
    type: 'CHANGE_COST_ITEM_COST_TYPE',
    cost_type: item.cost_type,
    id: item.id
  }
}

export default changeCostItemCostType