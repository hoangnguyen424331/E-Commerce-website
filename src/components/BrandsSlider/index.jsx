import './styles.scss'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

BrandsSlider.propTypes = {
  brands: PropTypes.array
}

function BrandsSlider({ brands }) {
  const PrevBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowLeft fontSize="large" className="prev-btn" />
      </div>
    )
  }

  const NextBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowRight fontSize="large" className="next-btn" />
      </div>
    )
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    rows: 2,
    slidesPerRow: 1,
    speed: 500,
    slidesToShow: 3
  }

  return (
    <ul className="brands-slider">
      {brands.length ? (
        <Slider
          {...settings}
          prevArrow={<PrevBtn />}
          nextArrow={<NextBtn />}
          className="slider--btn"
        >
          {brands.map(brand => (
            <li className="brands-slider__images" key={brand.id}>
              <img src={brand.imageUrl} alt="brands" />
            </li>
          ))}
        </Slider>
      ) : (
        <p>Chưa có thương hiệu</p>
      )}
    </ul>
  )
}

export default BrandsSlider
