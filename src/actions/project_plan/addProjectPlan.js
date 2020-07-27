const addProjectPlan = (projectPlan) => {

  return {
    type: 'ADD_PROJECT_PLAN',
    id: projectPlan.id,
    project_plan_type: projectPlan.project_plan_type,
    activity: projectPlan.activity,
    begin: projectPlan.activity,
    end: projectPlan.end

  }
}

export default addProjectPlan
