const changeSavingItemTotal = (item) => {
  return {
    type: 'CHANGE_SAVING_ITEM_TOTAL',
    total: item.total,
    id: item.id
  }
}

export default changeSavingItemTotal