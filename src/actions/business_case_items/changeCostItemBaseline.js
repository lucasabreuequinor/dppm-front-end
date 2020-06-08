const changeCostItemBaseline = (item) => {
  return {
    type: 'CHANGE_COST_ITEM_BASELINE',
    baseline: item.baseline,
    id: item.id
  }
}

export default changeCostItemBaseline 