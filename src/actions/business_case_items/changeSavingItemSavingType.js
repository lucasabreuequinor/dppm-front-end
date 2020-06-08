const changeSavingItemSavingType = (item) => {
  return {
    type: 'CHANGE_SAVING_ITEM_SAVING_TYPE',
    saving_type: item.saving_type,
    id: item.id
  }
}

export default changeSavingItemSavingType