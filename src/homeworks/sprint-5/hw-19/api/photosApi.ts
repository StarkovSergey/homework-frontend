import { baseExamsApi } from '../../examsApi'

/* 1. 📝 Создайте два эндпоинта в `api/photosApi'
 * - GET /photos
 * - PUT /photos/{id}
 * swagger: https://exams-frontend.kimitsu.it-incubator.io/api#/%F0%9F%93%B8%20Photos
 */
export const photosApi = baseExamsApi.injectEndpoints({
  endpoints: (build) => ({
    // getPhotos
    // updatePhoto
    getPhotos: build.query<Photo[], void>({
      query: () => '/photos',
      providesTags: ['Photos'],
    }),
    updatePhoto: build.mutation<Photo, Photo>({
      query: (photo) => ({ url: `/photos/${photo.id}`, method: 'PUT', body: photo }),
      invalidatesTags: ['Photos'],
    }),
  }),
})

export const { useGetPhotosQuery, useUpdatePhotoMutation } = photosApi

export type Photo = {
  id: number
  title: string
  url: string
}
