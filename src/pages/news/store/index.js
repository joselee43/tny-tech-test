import { createSlice } from '@reduxjs/toolkit'
import ApiService from '@app/services/apiService'

export const fetchData = () => async (dispatch, getState) => {
  dispatch(setLoading(true))
  dispatch(setError(''))
  const { config: { pageSize }, pages: { news: { page } } } = getState()
  ApiService.fetchNews(pageSize, page)
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
  page: 1,
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
      if (!isNaN(page) && page > 0) {
        state.page = page
      }
    },
    setData: (state, action) => {
      state.data = [
        ...state.data,
        ...action.payload
      ]
    }
  },
  extraReducers: {}
})

export const { setLoading, setError, setPage, setData } = newsSlice.actions

export default newsSlice.reducer
