import React from 'react'
import './styles.scss'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

BannerSlider.propTypes = {
  banners: PropTypes.array
}

function BannerSlider({ banners }) {
  const PreviousBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowLeft fontSize="large" className="banner-slider__icon" />
      </div>
    )
  }

  const NextBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <KeyboardArrowRight fontSize="large" className="banner-slider__icon" />
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="banner-slider">
      {banners.length ? (
        <Slider
          {...settings}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {banners.map((banner, index) => (
            <Link to={banner.link} key={index} className="banners-slider__link">
              <img
                src={banner.imageUrl}
                alt="banner"
                className="banners-slider__image"
              />
            </Link>
          ))}
        </Slider>
      ) : (
        <p>chưa có banner nào</p>
      )}
    </div>
  )
}

export default BannerSlider
