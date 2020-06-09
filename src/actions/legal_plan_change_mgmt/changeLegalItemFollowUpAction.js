const changeLegalItemFollowUpAction = (item) => {
  return {
    type: 'CHANGE_LEGAL_ITEM_FOLLOW_UP_ACTION',
    follow_up_action: item.follow_up_action,
    id: item.id
  }
}

export default changeLegalItemFollowUpAction