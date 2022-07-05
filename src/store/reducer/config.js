import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageSize: 10
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setPageSize: (state, action) => {
      const pageSize = parseInt(action.payload)
      if (!isNaN(pageSize) && pageSize > 0) {
        state.pageSize = pageSize
      }
    }
  },
  extraReducers: {}
})

export const { setPageSize } = configSlice.actions

export default configSlice.reducer
