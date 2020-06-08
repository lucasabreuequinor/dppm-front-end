const changeSavingItemItem = (item) => {
  return {
    type: 'CHANGE_SAVING_ITEM_ITEM',
    item: item.item,
    id: item.id
  }
}

export default changeSavingItemItem