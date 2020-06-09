const deleteChangeMgmtItem = (item) => {
  return {
    type: 'DELETE_CHANGE_MGMT_ITEM',
    id: item.id
  }
}

export default deleteChangeMgmtItem
