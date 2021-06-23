export function Login() {
  return (
    <>
      <form className="login">
        <h5>Admin Login</h5>
        <input
          className="input-text"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          className="input-text"
          type="text"
          placeholder="********"
        ></input>
        <div className="admin-buttons">
          <input type="submit" value="Login"></input>
        </div>
      </form>
      <button className="signup-button">
        <a href={`/signup`}>Sign-up</a>
      </button>
    </>
  )
}
