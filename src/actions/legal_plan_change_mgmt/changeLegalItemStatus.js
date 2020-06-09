const changeLegalItemStatus = (item) => {
  return {
    type: 'CHANGE_LEGAL_ITEM_STATUS',
    status: item.status,
    id: item.id
  }
}

export default changeLegalItemStatus