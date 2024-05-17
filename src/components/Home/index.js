import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-theme-home-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-image"
              />
              <h1 className="dark-theme-home-heading">Home</h1>
            </div>
          ) : (
            <div className="light-theme-home-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-image"
              />
              <h1 className="light-theme-home-heading">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
