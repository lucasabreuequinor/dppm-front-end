const changeChangeMgmtItemReviewedApproved = (item) => {
  return {
    type: 'CHANGE_CHANGE_MGMT_ITEM_REVIEWED_APPROVED',
    reviewed_approved: item.reviewed_approved,
    id: item.id
  }
}

export default changeChangeMgmtItemReviewedApproved