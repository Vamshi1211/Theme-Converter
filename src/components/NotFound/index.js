import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-theme-not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1 className="dark-not-found-heading">Lost Your Way?</h1>
              <p className="dark-not-found-des">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          ) : (
            <div className="light-theme-not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1 className="not-found-heading">Lost Your Way?</h1>
              <p className="not-found-des">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
