import productsReducer from 'src/pages/Products/product.slice'
import allProductsReducder from 'src/pages/Products/allProducts.slice'

const rootReducer = {
  products: productsReducer,
  allProducts: allProductsReducder
}

export default rootReducer
