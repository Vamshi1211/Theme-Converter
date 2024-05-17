import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeIcon = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="navbar-dark-container">
              <div className="theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
                <ul className="nav-item-container">
                  <li className="dark-theme-heading">
                    <Link to="/" className="nav-link-dark-item">
                      Home
                    </Link>
                  </li>
                  <li className="dark-theme-heading">
                    <Link to="/about" className="nav-link-dark-item">
                      About
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="theme-button"
                  data-testid="theme"
                  onClick={onClickThemeIcon}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme-image"
                  />
                </button>
              </div>
            </nav>
          ) : (
            <nav className="navbar-light-container">
              <div className="theme-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="website-logo"
                />
                <ul className="nav-item-container">
                  <li className="light-theme-heading">
                    <Link to="/" className="nav-link-light-item">
                      Home
                    </Link>
                  </li>
                  <li className="light-theme-heading">
                    <Link to="/about" className="nav-link-light-item">
                      About
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="theme-button"
                  data-testid="theme"
                  onClick={onClickThemeIcon}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="theme-image"
                  />
                </button>
              </div>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
