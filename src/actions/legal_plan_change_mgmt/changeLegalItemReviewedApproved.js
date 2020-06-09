const changeLegalItemReviewedApproved = (item) => {
  return {
    type: 'CHANGE_LEGAL_ITEM_REVIEWED_APPROVED',
    reviewed_approved: item.reviewed_approved,
    id: item.id
  }
}

export default changeLegalItemReviewedApproved