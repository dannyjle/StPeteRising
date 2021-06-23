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
