import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'
import filter from './images/filter.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Home() {
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
            <img src={spr} alt="St.Pete Rising Logo" width="495" height="255" />
          </a>
        </h1>
        <h2>
          <img src={dtspSky} alt="nav dropdown" width="495" height="255" />
          (Link Name)
        </h2>
      </header>
      <form>
        <input type="text" placeholder="&#x1F50D; Search"></input>
        <div className="dropdown">
          <img src={filter} alt="filter content" width="35" height="35" />
          <div className="dropdown-content">
            <a href="#">Last Updated</a>
            <a href="#">By Date Added</a>
            <a href="#">A-Z</a>
          </div>
        </div>
      </form>
      <main>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>

      <footer>
        <div className="socialMedia">
          <img src={facebook} alt="Facebook icon" width="35" height="35" />
          <img src={instagram} alt="Instagram icon" width="35" height="35" />
          <img src={twitter} alt="Twitter icon" width="35" height="35" />
          <img src={linkedin} alt="LinkedIn icon" width="35" height="35" />
        </div>
        Terms of Use - Privacy Policy © 2021 St. Pete Rising, LLC
      </footer>
    </>
  )
}
