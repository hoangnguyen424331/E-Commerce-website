import React from 'react'
import Slider from 'react-slick'
import ProductItem from '../ProductItem'
import PropTypes from 'prop-types'
import './styles.scss'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

ProductListSlider.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array
}

function ProductListSlider({ title, products }) {
  const PreviousBtn = props => {
    const { className, onClick } = props

    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowLeft
          fontSize="large"
          className="products-list-slider__icon"
        />
      </div>
    )
  }

  const NextBtn = props => {
    const { className, onClick } = props

    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowRight
          fontSize="large"
          className="products-list-slider__icon"
        />
      </div>
    )
  }

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoSpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1
  }

  return (
    <div className="products-list-slider">
      <div className="products-list-slider__title">{title}</div>
      {products.length ? (
        <Slider
          {...settings}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Slider>
      ) : (
        <p className="products-list-slider__no-product">Chưa có sản phẩm</p>
      )}
    </div>
  )
}

export default ProductListSlider
