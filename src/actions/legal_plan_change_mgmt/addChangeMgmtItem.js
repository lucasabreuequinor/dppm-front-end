const addChangeMgmtItem = (item) => {

  return {
    type: 'ADD_CHANGE_MGMT_ITEM',
    id: item.id,
    requirement: item.requirement,
    status: item.status,
    follow_up_action: item.follow_up_action,
    reviewed_approved: item.reviewed_approved,
  }
}

export default addChangeMgmtItem
