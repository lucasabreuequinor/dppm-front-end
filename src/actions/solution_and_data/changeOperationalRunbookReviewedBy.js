const changeOperationalRunbookReviewedBy = (text) => {
  return {
    type: 'CHANGE_OPERATIONAL_RUNBOOK_REVIEWED_BY',
    text: text
  }
}

export default changeOperationalRunbookReviewedBy