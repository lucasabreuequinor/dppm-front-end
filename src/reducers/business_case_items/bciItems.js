import bciBaselineColumn from './bciBaselineColumn'
import bciYear1Column from './bciYear1Column'
import bciYear2Column from './bciYear2Column'
import bciYear3Column from './bciYear3Column'
import bciYear4Column from './bciYear4Column'
import bciYear5Column from './bciYear5Column'
import bciCostItems from './bciCostItems'
import bciSavingItems from './bciSavingItems'
import bciProductionItems from './bciProductionItems'


import {combineReducers} from 'redux' 


const bciItems = combineReducers({
  bciBaselineColumn,
  bciYear1Column,
  bciYear2Column,
  bciYear3Column,
  bciYear4Column,
  bciYear5Column,
  bciCostItems,
  bciSavingItems,
  bciProductionItems
})


export default bciItems