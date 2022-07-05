import { createSlice } from '@reduxjs/toolkit'
import ApiService from '@app/services/apiService'

export const fetchData = (params) => async (dispatch, getState) => {
  const { reset } = params || {}
  dispatch(setLoading(true))
  dispatch(setError(''))
  if (reset) {
    dispatch(setPage(0))
    dispatch(resetData([]))
  }
  const { config: { pageSize }, pages: { news: { page, search } } } = getState()
  ApiService.fetchNews(search, pageSize, page + 1)
    .then(data => {
      const { /* totalResults, */ articles } = data
      dispatch(setPage(page + 1))
      return dispatch(setData(articles))
    })
    .catch(error => {
      dispatch(setError(error.toString()))
    })
    .finally(() => {
      dispatch(setLoading(false))
    })
}

const initialState = {
  loading: false,
  error: '',
  page: 0,
  search: '',
  data: []
}

const newsSlice = createSlice({
  name: 'pages/news',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = !!action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setPage: (state, action) => {
      const page = parseInt(action.payload)
      if (!isNaN(page) && page >= 0) {
        state.page = page
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setData: (state, action) => {
      state.data = [
        ...state.data,
        ...action.payload
      ]
    },
    resetData: (state, action) => {
      state.data = []
    }
  },
  extraReducers: {}
})

export const { setLoading, setError, setPage, setSearch, setData, resetData } = newsSlice.actions

export default newsSlice.reducer
