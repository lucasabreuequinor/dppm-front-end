const changeSavingItemBaseline = (item) => {
  return {
    type: 'CHANGE_SAVING_ITEM_BASELINE',
    baseline: item.baseline,
    id: item.id
  }
}

export default changeSavingItemBaseline