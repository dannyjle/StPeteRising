import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { authHeader } from '../auth'
import { useDropzone } from 'react-dropzone'

export function AddNew() {
  const [newProject, setNewProject] = useState({
    name: '',
    status: '',
    address: '',
    class: '',
    floor: '',
    units: '',
    completion: '',
    website: '',
    photoURL: '',
  })

  const [errorMessage, setErrorMessage] = useState()

  const history = useHistory()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  const [isUploading, setIsUploading] = useState(false)

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedProject = { ...newProject, [fieldName]: value }

    setNewProject(updatedProject)
  }

  function handleIntegerFieldChange(event) {
    const value = parseInt(event.target.value) || 0

    const fieldName = event.target.name

    const updatedProject = { ...newProject, [fieldName]: value }

    setNewProject(updatedProject)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Projects', {
      method: 'POST',
      // send JSON ~and~ (token)
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newProject),
    })

    if (response.status === 401) {
      // @ts-ignore
      setErrorMessage('!!!NOT AUTHORIZED!!!')
    } else {
      if (response.ok) {
        history.push('/')
      }
    }
  }

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)
    setIsUploading(true)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.ok) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        // @ts-ignore
        setNewProject({ ...newProject, photoURL: url })
      } else {
        // @ts-ignore
        setErrorMessage('!!!UNABLE TO UPLOAD IMAGE!!!')
      }
    } catch {
      // Catch any network errors and show the user we could not process their upload
      // @ts-ignore
      setErrorMessage('!!!UNABLE TO UPLOAD IMAGE!!!')
    }

    setIsUploading(false)
  }

  let dropZoneMessage =
    'CLICK (OR DRAG A FILE) TO UPLOAD AN IMAGE OF THE DEVELOPMENT ...'

  if (isUploading) {
    dropZoneMessage = 'UPLOADING ...'
  }

  if (isDragActive) {
    dropZoneMessage = 'DROP THE FILE HERE ...'
  }

  return (
    <>
      {errorMessage ? <p className="submit-error">{errorMessage}</p> : null}
      <form className="add-new" onSubmit={handleFormSubmit}>
        <section>
          <p className="form-input">
            <label htmlFor="name">Name: </label>
            <input
              required
              type="text"
              name="name"
              value={newProject.name}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="status">Status: </label>
            <input
              type="text"
              name="status"
              value={newProject.status}
              onChange={handleStringFieldChange}
            ></input>
          </p>
          <p className="form-input">
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              value={newProject.address}
              onChange={handleStringFieldChange}
            ></input>
          </p>
        </section>
        <section>
          <p className="form-input">
            <label htmlFor="class">Class: </label>
            <input
              type="text"
              name="class"
              value={newProject.class}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="floor">Floor: </label>
            <input
              type="text"
              name="floor"
              value={newProject.floor}
              onChange={handleIntegerFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="units">Units: </label>
            <input
              type="text"
              name="units"
              value={newProject.units}
              onChange={handleIntegerFieldChange}
            />
          </p>
        </section>
        <section>
          <p className="form-input">
            <label htmlFor="completion">Completion: </label>
            <input
              type="text"
              name="completion"
              value={newProject.completion}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="website">Website: </label>
            <input
              type="text"
              name="website"
              value={newProject.website}
              onChange={handleStringFieldChange}
            />
          </p>
        </section>
        <section>
          {newProject.photoURL ? (
            <p>
              <img
                alt="Development Pic"
                width={200}
                src={newProject.photoURL}
              />
            </p>
          ) : null}
          <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneMessage}
            </div>
          </div>
        </section>
        <p>
          <input className="submit" type="submit" value="Submit" />
        </p>
      </form>
    </>
  )
}
