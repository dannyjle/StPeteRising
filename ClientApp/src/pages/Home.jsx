import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'
import filter from './images/filter.svg'

export function Home() {
  return (
    <>
      <img
        className="navButton"
        src={list}
        alt="nav dropdown"
        width="35"
        height="35"
      />
      <header>
        <h1>St. Pete Rising</h1>
        <h2>(Link Name)</h2>
        <ul>
          <li>Home</li>
          <li>Developments</li>
          <li>Login</li>
        </ul>
      </header>
      <form>
        <input type="text" placeholder="&#x1F50D; Search"></input>
        <div className="filterButton">
          <img src={filter} alt="filter content" width="25" height="25" />
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
