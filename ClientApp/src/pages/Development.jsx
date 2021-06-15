import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'

export function Development() {
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
      <main></main>
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
