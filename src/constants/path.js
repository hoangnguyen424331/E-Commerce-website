class Path {
  constructor() {
    this.home = '/'
    this.login = '/login'
    this.register = '/register'
    this.products = '/products'
    this.productDetail = '/products/:productParamId'
    this.cart = '/cart'
    this.checkout = '/checkout'
    this.delivery = `${this.checkout}/delivery`
    this.sumary = `${this.checkout}/sumary`
    this.user = '/user'
    this.profile = `${this.user}/profile`
    this.password = `${this.user}/password`
    this.purchase = `${this.purchase}/purchase`
    this.admin = '/admin'
    this.adminManageProducts = `${this.admin}/products`
    this.adminManageUsers = `${this.admin}/users`
    this.notFound = '*'
  }
}

export const path = new Path()
