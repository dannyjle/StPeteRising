import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function AddNew() {
  return (
    <>
      <div className="layout">
        <header>
          <div className="spr-img">
            <div className="container">{/* drop down menu */}</div>
          </div>

          <h1>
            <a href="/">
              <img
                className="spr-logo"
                src={spr}
                alt="St.Pete Rising Logo"
                width="475"
                height="225"
              />
            </a>
          </h1>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/">Projects</a>
            <div className="nav-right">
              <a href="/">Login</a>
            </div>
          </nav>
          <h2 className="text-container">
            <img
              className="dtsp-skyline"
              src={dtspSky}
              alt="nav dropdown"
              width="495"
              height="200"
            />
            <div className="text-centered">(Link Name)</div>
          </h2>
        </header>

        <footer>
          <div className="social-media">
            <a href="https://www.facebook.com/stpeterising/">
              <img
                className="social-icon"
                src={facebook}
                alt="Facebook icon"
                width="35"
                height="35"
              />
            </a>
            <a href="https://www.instagram.com/stpeterising/">
              <img
                className="social-icon"
                src={instagram}
                alt="Instagram icon"
                width="35"
                height="35"
              />
            </a>
            <a href="https://twitter.com/StPeteRising">
              <img
                className="social-icon"
                src={twitter}
                alt="Twitter icon"
                width="35"
                height="35"
              />
            </a>
            <a href="https://www.linkedin.com/company/stpeterising">
              <img
                className="social-icon"
                src={linkedin}
                alt="LinkedIn icon"
                width="35"
                height="35"
              />
            </a>
          </div>
        </footer>
        <div className="footer-link">
          <a href="https://stpeterising.com/terms">Terms of Use</a>
          <a href="https://stpeterising.com/privacy">
            Privacy Policy © 2021 St. Pete Rising, LLC
          </a>
        </div>
      </div>
    </>
  )
}
