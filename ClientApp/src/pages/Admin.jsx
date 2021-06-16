import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Admin() {
  return (
    <>
      <div className="layout">
        <header>
          <div className="spr-img">
            <div className="container">
              <div className="dropdown">
                <img src={list} alt="nav dropdown" width="35" height="35" />
                <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">Developments</a>
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>

          <h1>
            <a to="/">
              <img
                src={spr}
                alt="St.Pete Rising Logo"
                width="475"
                height="225"
              />
            </a>
          </h1>
          <h2 className="text-container">
            <img src={dtspSky} alt="nav dropdown" width="495" height="200" />
            <div className="text-centered">(Link Name)</div>
          </h2>
        </header>
        <form className="login">
          <h4>Admin Login</h4>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="********"></input>
          <div className="login-buttons">
            <input type="submit" value="Login"></input>
            <input type="submit" value="Sign-up"></input>
          </div>
        </form>
        <footer>
          <div className="social-media">
            <img src={facebook} alt="Facebook icon" width="35" height="35" />
            <img src={instagram} alt="Instagram icon" width="35" height="35" />
            <img src={twitter} alt="Twitter icon" width="35" height="35" />
            <img src={linkedin} alt="LinkedIn icon" width="35" height="35" />
          </div>
          <p></p>
          Terms of Use - Privacy Policy © 2021 St. Pete Rising, LLC
        </footer>
      </div>
    </>
  )
}
