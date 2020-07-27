const deleteProjectPlan = (projectPlan) => {
  return {
    type: 'DELETE_PROJECT_PLAN',
    id: projectPlan.id
  }
}

export default deleteProjectPlan
