import productsReducer from 'src/pages/Products/product.slice'
import allProductsReducder from 'src/pages/Products/allProducts.slice'
import productDetailReducer from 'src/pages/ProductDetail/productDetail.slice'
import productReviewReducer from 'src/pages/ProductDetail/components/ProductReview/productReview.slice'
import cartReducer from 'src/pages/Cart/cart.slice'
import bannersReducer from 'src/pages/Home/banners.slice'
import authReducer from 'src/pages/Auth/auth.slice'

const rootReducer = {
  products: productsReducer,
  allProducts: allProductsReducder,
  productDetail: productDetailReducer,
  productReviews: productReviewReducer,
  cart: cartReducer,
  banners: bannersReducer,
  auth: authReducer
}

export default rootReducer
