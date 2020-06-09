const deleteLegaltItem = (item) => {
  return {
    type: 'DELETE_LEGAL_ITEM',
    id: item.id
  }
}

export default deleteLegaltItem
