import Banner1 from "../../../assets/images/banner/auth-banner.svg";
const TitleComponent = () => {
  return (
    <div className="col-md-6 p-0">
    <div className="auth-banner-block">
      <div className="auth-banner-content">
        <div className="auth-banner-img">
          <img src={Banner1} alt="Banner1" />
        </div>
        <h4 className="banner-content-title">Master with AI</h4>
        <p className="banner-content-dsc-text">
          Join thousands of students who are transforming their learning journey with personalized AI assistance.
        </p>
      </div>
    </div>
    </div>
  )
}

export default TitleComponent
