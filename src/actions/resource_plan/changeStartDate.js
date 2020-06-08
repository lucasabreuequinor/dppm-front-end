const changeStartDate = (resource) => {
  return {
    type: 'CHANGE_RESOURCE_START_DATE',
    start_date: resource.start_date,
    id: resource.id
    
  }
}

export default changeStartDate