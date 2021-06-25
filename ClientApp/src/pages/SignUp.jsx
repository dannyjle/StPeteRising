import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function SignUp() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <form className="signup" onSubmit={handleFormSubmit}>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <h5>Add New User</h5>
        <input
          className="input-text"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={newUser.fullName}
          onChange={handleStringFieldChange}
        ></input>
        <input
          className="input-text"
          type="text"
          placeholder="Email Address"
          name="email"
          value={newUser.email}
          onChange={handleStringFieldChange}
        ></input>
        <input
          className="input-text"
          type="password"
          name="password"
          placeholder="********"
          value={newUser.password}
          onChange={handleStringFieldChange}
        ></input>
        <div className="admin-buttons">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </>
  )
}
