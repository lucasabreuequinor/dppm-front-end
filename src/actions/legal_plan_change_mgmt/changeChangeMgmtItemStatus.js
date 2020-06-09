const changeChangeMgmtItemStatus = (item) => {
  return {
    type: 'CHANGE_CHANGE_MGMT_ITEM_STATUS',
    status: item.status, 
    id: item.id
  }
}

export default changeChangeMgmtItemStatus