import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productReviewsApi from 'src/api/productReview.api'
import { payLoadCreater } from 'src/utils/helper'

export const getProductReviews = createAsyncThunk(
  'productReview/getProductReviews',
  payLoadCreater(productReviewsApi.getProductReviews)
)

export const postProductReviews = createAsyncThunk(
  'productReview/postProductReviews',
  payLoadCreater(productReviewsApi.postProductReviews)
)

const productReviews = createSlice({
  name: 'productReviews',
  initialState: {
    productReviews: [],
    loading: false,
    error: '',
    sending: false,
    sendingError: ''
  },
  extraReducers: {
    [getProductReviews.pending]: (state, action) => {
      state.loading = true
    },
    [getProductReviews.fulfilled]: (state, action) => {
      state.loading = false
      state.productReviews = action.payload.data
    },
    [getProductReviews.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    [postProductReviews.pending]: (state, action) => {
      state.sending = true
    },
    [postProductReviews.fulfilled]: (state, action) => {
      state.sending = false
      state.productReviews.push(action.payload.data)
    },
    [postProductReviews.rejected]: (state, action) => {
      state.sending = false
      state.sendingError = action.payload
    }
  }
})

const productReviewsReducer = productReviews.reducer
export default productReviewsReducer
