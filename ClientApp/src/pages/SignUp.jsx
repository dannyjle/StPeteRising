export function SignUp() {
  return (
    <>
      {' '}
      <form className="signup">
        <h5>Add New User</h5>
        <input
          className="input-text"
          type="text"
          placeholder="Full Name"
        ></input>
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
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </>
  )
}
