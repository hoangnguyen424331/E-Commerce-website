import productsReducer from 'src/pages/Products/product.slice'
import allProductsReducder from 'src/pages/Products/allProducts.slice'
import productDetailReducer from 'src/pages/ProductDetail/productDetail.slice'
import productReviewReducer from 'src/components/ProductReview/productReview.slice'

const rootReducer = {
  products: productsReducer,
  allProducts: allProductsReducder,
  productDetail: productDetailReducer,
  productReviews: productReviewReducer
}

export default rootReducer
