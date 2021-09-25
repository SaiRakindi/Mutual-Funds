import './index.css'

const NotFound = () => (
  <div className="not-found-app-container notFoundBgClassName">
    <div className="not-found-responsive-container">
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="not-found-heading ">Lost Your Way?</h1>
        <p className="not-found-content">
          We cannot seem to find the page you are looking for.
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
