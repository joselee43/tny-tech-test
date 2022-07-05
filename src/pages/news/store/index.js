import { createSlice } from '@reduxjs/toolkit'
import ApiService from '../../../services/apiService'

export const fetchData = () => async (dispatch, getState) => {
  dispatch(setLoading(true))
  dispatch(setError(''))
  ApiService.fetchNews()
    .then(data => {
      const { /* totalResults, */ articles } = data
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
    setData: (state, action) => {
      state.data = [
        ...state.data,
        ...action.payload
      ]
    }
  },
  extraReducers: {}
})

export const { setLoading, setError, setData } = newsSlice.actions

export default newsSlice.reducer
