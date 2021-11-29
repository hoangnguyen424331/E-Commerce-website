import productsReducer from 'src/pages/Products/product.slice'
import allProductsReducder from 'src/pages/Products/allProducts.slice'
import authReducer from '../pages/Auth/auth.slice'

const rootReducer = {
  products: productsReducer,
  allProducts: allProductsReducder,
  auth: authReducer
}

export default rootReducer
