import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Admin() {
  return (
    <>
      <form className="login">
        <h5>Admin Login</h5>
        <input
          className="input-text"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="input-text"
          type="text"
          placeholder="********"
        ></input>
        <div className="admin-buttons">
          <input type="submit" value="Login"></input>
          <input type="submit" value="New Account"></input>
        </div>
      </form>
    </>
  )
}
