import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-theme-home-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="home-image"
              />
              <h1 className="dark-theme-home-heading">About</h1>
            </div>
          ) : (
            <div className="light-theme-home-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="home-image"
              />
              <h1 className="light-theme-home-heading">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
