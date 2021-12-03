import React from 'react'
import RatingStars from '../RatingStars'
import './styles.scss'
import noReviewImg from 'src/assets/images/no-review.png'

function ProductReview(props) {
  const productReviews = [
    {
      userName: 'Hoang Nguyen',
      rating: 5,
      comment: 'Sản phẩm tốt, dày dặn bé rất thích.sẽ ủng hộ shop nhiều',
      datetime: '2021-12-02 13:37'
    },
    {
      userName: 'Thanh Phuong',
      rating: 5,
      comment: 'Sản phẩm tốt, dày dặn bé rất thích.sẽ ủng hộ shop nhiều',
      datetime: '2021-12-02 13:37'
    }
  ]
  return (
    <div className="product-reviews">
      {productReviews.length ? (
        <ul className="product-reviews__list">
          {productReviews.map((productReview, index) => (
            <li className="product-review" key={index}>
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
                    {productReview.datetime}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="product-reviews__no-reviews">
          <img src={noReviewImg} alt="no review" />
          <p>Chưa có đánh giá</p>
        </div>
      )}
    </div>
  )
}

export default ProductReview
