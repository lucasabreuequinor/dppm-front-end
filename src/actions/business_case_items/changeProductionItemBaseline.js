const changeProductionItemBaseline = (item) => {
  return {
    type: 'CHANGE_PRODUCTION_ITEM_BASELINE',
    baseline: item.baseline,
    id: item.id
  }
}

export default changeProductionItemBaseline 