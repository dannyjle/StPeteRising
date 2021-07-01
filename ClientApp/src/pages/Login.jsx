import { useState } from 'react'
import { recordAuthentication } from '../auth'

export function Login() {
  const [errorMessage, setErrorMessage] = useState()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...user, [fieldName]: value }
    setUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      // @ts-ignore
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      // TODO, record the login
      recordAuthentication(apiResponse)
      window.location.assign('/')
    }
  }

  return (
    <>
      {/* code to prevent zoom in for mobile view */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <form className="login" onSubmit={handleFormSubmit}>
        <h5>User Login</h5>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <label>Email:</label>
        <input
          className="input-text"
          type="email"
          name="email"
          value={user.email}
          onChange={handleStringFieldChange}
        ></input>
        <label>Password:</label>
        <input
          className="input-text"
          type="password"
          name="password"
          value={user.password}
          onChange={handleStringFieldChange}
        ></input>
        <div className="admin-buttons">
          <input type="submit" value="Login"></input>
        </div>
      </form>
    </>
  )
}
