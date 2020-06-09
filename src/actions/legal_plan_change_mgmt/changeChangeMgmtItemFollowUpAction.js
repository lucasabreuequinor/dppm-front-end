const changeChangeMgmtItemFollowUpAction = (item) => {
  return {
    type: 'CHANGE_CHANGE_MGMT_ITEM_FOLLOW_UP_ACTION',
    follow_up_action: item.follow_up_action,
    id: item.id
  }
}

export default changeChangeMgmtItemFollowUpAction