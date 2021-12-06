import React from 'react'
import RatingStars from '../RatingStars'
import './styles.scss'
import noReviewImg from 'src/assets/images/no-review.png'
import { useSelector } from 'react-redux'
import { timeCoverter } from 'src/utils/helper'

function ProductReview(props) {
  const { productReviews, loading, error } = useSelector(
    state => state.productReviews
  )

  return (
    <>
      {!loading && !error && (
        <div className="product-reviews">
          {productReviews?.length ? (
            <ul className="product-reviews__list">
              {productReviews.map(productReview => (
                <li className="product-review" key={productReview}>
                  <div className="product-review__wrap">
                    <div className="product-review__user-avatar">
                      <img
                        src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                        alt="user avatar"
                      />
                    </div>
                    <div className="product-review__content">
                      <div className="product-review__username">
                        {productReview.userName}
                      </div>
                      <div className="product-review__rating-starts">
                        <RatingStars rate={productReview.rating} />
                      </div>
                      <p className="product-review__comment">
                        {productReview.comment}
                      </p>
                      <div className="product-review__datetime">
                        {timeCoverter(productReview.createdAt)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="product-reviews__no-review">
              <img src={noReviewImg} alt="No Review" />
              <p>Chưa có đánh giá</p>
            </div>
          )}
        </div>
      )}
      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p className="error">Đã xảy ra lỗi: {error}</p>}
    </>
  )
}

export default ProductReview
