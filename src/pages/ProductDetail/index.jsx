import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import { unwrapResult } from '@reduxjs/toolkit'
import { useParams } from 'react-router'
import ProductSlider from 'src/components/ProductSlider'
import { getProductDetail } from './productDetail.slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  discountPercentage,
  formatCurrency,
  formatQuantity,
  formatRatingNumber,
  getProductIdFromParam
} from 'src/utils/helper'
import './styles.scss'
import RatingStars from 'src/components/RatingStars'
import QuantityController from 'src/components/QuantityController'
import { AddShoppingCart, FavoriteBorder } from '@material-ui/icons'
import { SiAdguard } from 'react-icons/si'
import { Link } from 'react-router-dom'
import ProductReviews from 'src/pages/ProductDetail/components/ProductReview'
import ProductListSlider from 'src/components/ProductListSlider'
import ReviewForm from './components/ReviewForm'
import { getProductReviews } from 'src/pages/ProductDetail/components/ProductReview/productReview.slice'
import { cartAction } from '../Cart/cart.slice'
import useAuth from 'src/hooks/useAuth'

function ProductDetail(props) {
  const dispatch = useDispatch()
  const { productParamId } = useParams()
  const { productDetail, loading } = useSelector(state => state.productDetail)
  const [quantity, setQuantity] = useState(1)
  const { products } = useSelector(state => state.products)
  const { authenticated } = useAuth()

  useEffect(() => {
    ;(async () => {
      try {
        setQuantity(1)
        const productId = getProductIdFromParam(productParamId)
        const productDetailResponse = await dispatch(
          getProductDetail(productId)
        )
        unwrapResult(productDetailResponse)
        const productReviewsResoinse = await dispatch(
          getProductReviews(productId)
        )
        unwrapResult(productReviewsResoinse)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    })()
  }, [productParamId, dispatch])

  const handleQuantityChange = value => {
    setQuantity(value)
  }

  const handleAddToCart = () => {
    dispatch(cartAction.addToCart({ product: productDetail, quantity }))
  }

  return (
    <div className="product-detail">
      {Object.keys(productDetail).length && (
        <Container maxWidth="lg">
          <Grid container className="product-detail__wrap">
            <Grid item xs={12} md={5} className="product-detail__slider">
              <ProductSlider images={productDetail.images} />
            </Grid>
            <Grid item xs={12} md={7} className="product-detail__meta">
              <div className="product-detail__meta-top">
                <h1 className="product-detail__title">{productDetail.name}</h1>
                <div className="product-detail__meta-inner">
                  <div className="product-detail__rating">
                    <span>{formatRatingNumber(productDetail.rating)}</span>
                    <RatingStars rate={productDetail.rating} />
                  </div>
                  <div className="product-detail__sold">
                    <span>{formatQuantity(productDetail.sold)}</span>
                    <span>Đã Bán</span>
                  </div>
                </div>
                <div className="product-detail__price">
                  <div className="product-detail__price-original">
                    {formatCurrency(productDetail.price_before_discount)}
                  </div>
                  <div className="product-detail__price-sale">
                    {formatCurrency(productDetail.price)}
                  </div>
                  <div className="product-detail__discount">
                    {discountPercentage(
                      productDetail.price_before_discount,
                      productDetail.price
                    )}{' '}
                    GIẢM
                  </div>
                </div>
                <div className="buy-qty">
                  <span className="buy-qty-title">Số Lượng</span>
                  <span className="buy-qty__control">
                    <QuantityController
                      max={productDetail.quantity}
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </span>
                  <div className="buy-qty__stock">
                    {productDetail.quantity} sản phẩm có sẵn
                  </div>
                </div>
                <div className="product-detail__buttons">
                  <button className="button button--lg">
                    <FavoriteBorder
                      fontSize="large"
                      className="product-detail__button-icon"
                    />
                    Yêu thích
                  </button>
                  <button
                    className="button button--lg button--outline"
                    onClick={handleAddToCart}
                  >
                    <AddShoppingCart
                      fontSize="large"
                      className="product-detail__button-icon"
                    />
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <div className="product-detail__meta--bottom">
                <Link className="product-detail__protect">
                  <span>
                    <SiAdguard />
                    Shopee đảm bảo
                  </span>
                  <span>3 Ngày Trả Hàng / Hoàn Tiền</span>
                </Link>
              </div>
            </Grid>
          </Grid>
          <div className="product-detail-desc">
            <div className="product-detail-content__wrap">
              <div className="product-detail-content__heading product-detail-desc__heading">
                Mô tả sản phẩm
              </div>
              <div className="product-detail-desc__detail">
                {productDetail.description}
              </div>
            </div>
          </div>
          <div className="product-detail-review">
            <div className="product-detail-content__wrap">
              <div className="product-detail-content__heading">
                Đánh giá sản phẩm
              </div>
              <div className="product-detail-review__content">
                <ProductReviews />
              </div>
              {authenticated && (
                <div className="product-detail-review__form">
                  <ReviewForm productId={productDetail.id} />
                </div>
              )}
            </div>
          </div>
          <div className="watched-products">
            <ProductListSlider title={'Sản phẩm đã xem'} products={products} />
          </div>
        </Container>
      )}
      {loading && <p>Đang tải dữ liệu...</p>}
    </div>
  )
}

export default ProductDetail
