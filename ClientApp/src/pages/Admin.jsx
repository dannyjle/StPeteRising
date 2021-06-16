import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'
import spr from './images/sprlogo.png'

export function Admin() {
  return (
    <>
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
      <header>
        <h1>
          <a to="/">
            <img src={spr} alt="St.Pete Rising Logo" width="455" height="255" />
          </a>
        </h1>
        <h2>(Link Name)</h2>
      </header>
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="text" placeholder="********"></input>
        <input type="submit" value="Login"></input>
        <input type="submit" value="Sign-up"></input>
      </form>
      <footer>
        <img src={facebook} alt="Facebook icon" width="35" height="35" />
        <img src={instagram} alt="Facebook icon" width="35" height="35" />
        <img src={twitter} alt="Facebook icon" width="35" height="35" />
        <img src={linkedin} alt="Facebook icon" width="35" height="35" />
        Terms of Use - Privacy Policy © 2021 St. Pete Rising, LLC
      </footer>
    </>
  )
}
