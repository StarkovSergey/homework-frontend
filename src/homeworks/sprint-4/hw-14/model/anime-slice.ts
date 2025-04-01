import { createAppSlice } from '@/shared/utils/createAppSlice.ts'
import { Anime, animeApi, GetAnimeSearchParams } from '../anime-fake-api.ts'

export const animeSlice = createAppSlice({
  name: 'anime',
  initialState: {
    anime: [] as Anime[],
  },
  reducers: (create) => ({
    fetchAnimeTC: create.asyncThunk<Anime[], GetAnimeSearchParams>(
      async (params) => {
        return await animeApi.getAnime(params)
      },
      {
        fulfilled: (state, action) => {
          state.anime = action.payload
        },
      }
    ),
  }),
  selectors: {
    selectAnime: (state) => state.anime
  }
})

export const { fetchAnimeTC } = animeSlice.actions
export const { selectAnime } = animeSlice.selectors