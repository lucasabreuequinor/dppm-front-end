const addProductionItem = (item) => {

  return {
    type: 'ADD_PRODUCTION_ITEM',
    id: item.id,
    item: item.item,
    production_type: item.production_type,
    baseline: item.baseline,
    year1: item.year1,
    year2: item.year2,
    year3: item.year3,
    year4: item.year4,
    year5: item.year5,
    total: item.total,
    assumptionsComments: item.assumptionsComments
  }
}

export default addProductionItem
