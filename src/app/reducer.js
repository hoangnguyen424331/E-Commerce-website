import productsReducer from 'src/pages/Products/product.slice'
import allProductsReducder from 'src/pages/Products/allProducts.slice'
import productDetailReducer from 'src/pages/ProductDetail/productDetail.slice'
import productReviewReducer from 'src/components/ProductReview/productReview.slice'
import cartReducer from 'src/pages/Cart/cart.slice'
import bannersReducer from 'src/pages/Home/banners.slice'

const rootReducer = {
  products: productsReducer,
  allProducts: allProductsReducder,
  productDetail: productDetailReducer,
  productReviews: productReviewReducer,
  cart: cartReducer,
  banners: bannersReducer
}

export default rootReducer
