const changeOperationalRunbookStatus = (text) => {
  return {
    type: 'CHANGE_OPERATIONAL_RUNBOOK_STATUS',
    text: text
  }
}

export default changeOperationalRunbookStatus