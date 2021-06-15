import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'

export function Home() {
  return (
    <>
      <header>
        <h1>St. Pete Rising</h1>
        <h2>(Link Name)</h2>
        <h3>ad</h3>
      </header>
      <form>
        <input type="text" placeholder="🔍 Search"></input>
        <button>filter</button>
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
        <img src={facebook} alt="Facebook icon" width="35" height="35" />
        <img src={instagram} alt="Facebook icon" width="35" height="35" />
        <img src={twitter} alt="Facebook icon" width="35" height="35" />
        <img src={linkedin} alt="Facebook icon" width="35" height="35" />
        Terms of Use - Privacy Policy © 2021 St. Pete Rising, LLC
      </footer>
    </>
  )
}
