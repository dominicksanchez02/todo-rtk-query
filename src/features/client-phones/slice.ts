import { PhoneListProps } from './index-interfaces';
import { InputProps } from '../client-phones/form/index-interfaces';
import { AppSlice } from '../../utils/app-slice';

const ClientPhonesSlice = AppSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPhones: builder.query<PhoneListProps, any>({
      query: () => '/getclientphones',
      providesTags: (result) =>
        result && result.clientPhoneList
          ?
            [
              ...result.clientPhoneList.map(({ rcpid }) => ({
                type: 'ClientPhones' as const, id: rcpid 
              })),
              { type: 'ClientPhones', id: 'LIST' }
            ]
          :
            [{ type: 'ClientPhones', id: 'LIST' }]
    }),
    addPhone: builder.mutation<InputProps, InputProps>({
      query: (body) => ({
        body,
        url: '/clientphone/create',
        method: 'POST'
      }),
      invalidatesTags: [{ type: 'ClientPhones', id: 'LIST' }]
    }),
    editPhone: builder.mutation<InputProps, InputProps>({
      query: (body) => ({
        body,
        url: '/clientphone/update',
        method: 'PUT'
      }),
      async onQueryStarted({ rcpid, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          ClientPhonesSlice.util.updateQueryData('getPhones', rcpid, (draft) => {
            console.log(draft, patch)
            Object.assign(draft, patch);
          })
        )

        queryFulfilled.catch(patchResult.undo);
      },
      invalidatesTags: (result, error, { rcpid }) => [{ type: 'ClientPhones', rcpid }]
    }),
    deletePhone: builder.mutation<InputProps, string>({
      query: (id) => ({
        url: `/clientphone/${ id }/delete`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'ClientPhones', id }]
    })
  })
})

export const {
  useGetPhonesQuery,
  useAddPhoneMutation,
  useEditPhoneMutation,
  useDeletePhoneMutation
} = ClientPhonesSlice;