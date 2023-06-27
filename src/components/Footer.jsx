export const Footer = () => {
  return (
    <footer className="primary-footer | padding-block-700">
      <div className="container">
        <div className="primary-footer-wrapper">
          <div className="primary-footer-logo-social">
            <a href="#">
            <svg className="logo" width={146} height={24}>
              <use xlinkHref="../src/assets/logo.svg"></use>
            </svg>
            </a>
            <ul className='social-list' role="list" aria-label="social links">
              <li><a aria-label="facebook" href="#"><svg className="social-icon">
              <use xlinkHref="../src/assets/social-icons.svg#icon-facebook"></use>
            </svg></a></li>
              <li><a aria-label="twitter" href="#"><svg className="social-icon">
              <use xlinkHref="../src/assets/social-icons.svg#icon-twitter"></use>
            </svg></a></li>
              <li><a aria-label="pinterest" href="#"><svg className="social-icon">
              <use xlinkHref="../src/assets/social-icons.svg#icon-pinterest"></use>
            </svg></a></li>
              <li><a aria-label="instagram" href="#"><svg className="social-icon">
              <use xlinkHref="../src/assets/social-icons.svg#icon-instagram"></use>
            </svg></a></li>
            </ul>
            </div>
            </div>
            </div>
    </footer>
  )
}
