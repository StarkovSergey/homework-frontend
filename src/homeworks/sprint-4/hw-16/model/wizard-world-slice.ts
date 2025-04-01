import { createAppSlice } from '@/shared/utils/createAppSlice.ts'
import { HouseFullInfo } from '../wizard-world-data'
import { HouseViewModel, wizardFakeApi } from '../wizard-world-fake-api'

export const wizardWorldSlice = createAppSlice({
  name: 'wizardWorld',
  initialState: {
    houses: [] as HouseViewModel[],
    currentHouse: null as HouseFullInfo | null
  },
  reducers: (create) => ({
    fetchHousesTC: create.asyncThunk<HouseViewModel[], void>(
      async () => {
        return await wizardFakeApi.getHouses()
      },
      {
        fulfilled: (state, action) => {
          state.houses = action.payload
        },
      }
    ),
    fetchHouseTC: create.asyncThunk<HouseFullInfo, string>(
      async (id) => {
        return await wizardFakeApi.getHouseById(id)
      },
      {
        fulfilled: (state, action) => {
          state.currentHouse = action.payload
        },
      }
    ),
  }),
  selectors: {
    selectHouses: (state) => state.houses,
    selectCurrentHouse: (state) => state.currentHouse
  }
})

export const { fetchHousesTC, fetchHouseTC } = wizardWorldSlice.actions
export const { selectHouses, selectCurrentHouse  } = wizardWorldSlice.selectors