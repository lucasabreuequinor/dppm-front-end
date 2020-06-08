const deleteSavingItem = (item) => {
  return {
    type: 'DELETE_SAVING_ITEM',
    id: item.id
  }
}

export default deleteSavingItem
