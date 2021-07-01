import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { authHeader } from '../auth'
import { useDropzone } from 'react-dropzone'

export function EditProject() {
  const [editProject, setEditProject] = useState({
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

  const history = useHistory()
  const params = useParams()
  // @ts-ignore
  const id = params.id

  const [errorMessage, setErrorMessage] = useState()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  useEffect(() => {
    async function fetchProject() {
      const response = await fetch(`/api/Projects/${id}`)
      if (response.ok) {
        const apiData = await response.json()
        setEditProject(apiData)
      }
    }
    fetchProject()
  }, [id])

  const [isUploading, setIsUploading] = useState(false)

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedProject = { ...editProject, [fieldName]: value }

    setEditProject(updatedProject)
  }

  function handleIntegerFieldChange(event) {
    const value = parseInt(event.target.value) || 0

    const fieldName = event.target.name

    const updatedProject = { ...editProject, [fieldName]: value }

    setEditProject(updatedProject)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch(`/api/Projects/${id}`, {
      method: 'PUT',
      // send JSON ~and~ (token)
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(editProject),
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
      // sent along when creating the project,
      // otherwise show an error
      if (response.ok) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        // @ts-ignore
        setEditProject({ ...editProject, photoURL: url })
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

  // @ts-ignore
  if (!editProject.id) {
    return <></>
  }

  return (
    <>
      <div className="container">
        <h5>Edit Project:</h5>
      </div>
      {errorMessage ? <p className="submit-error">{errorMessage}</p> : null}
      <form className="add-new" onSubmit={handleFormSubmit}>
        <div className="container">
          <p className="form-input">
            <label htmlFor="name">Name: </label>
            <input
              required
              type="text"
              name="name"
              value={editProject.name}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="status">Status: </label>
            <input
              type="text"
              name="status"
              value={editProject.status}
              onChange={handleStringFieldChange}
            ></input>
          </p>
          <p className="form-input">
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              value={editProject.address}
              onChange={handleStringFieldChange}
            ></input>
          </p>
        </div>
        <div className="container">
          <p className="form-input">
            <label htmlFor="class">Class: </label>
            <input
              type="text"
              name="class"
              value={editProject.class}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="floor">Floor: </label>
            <input
              type="text"
              name="floor"
              value={editProject.floor}
              onChange={handleIntegerFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="units">Units: </label>
            <input
              type="text"
              name="units"
              value={editProject.units}
              onChange={handleIntegerFieldChange}
            />
          </p>
        </div>
        <div className="container">
          <p className="form-input">
            <label htmlFor="completion">Completion: </label>
            <input
              type="text"
              name="completion"
              value={editProject.completion}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="website">Website: </label>
            <input
              type="text"
              name="website"
              value={editProject.website}
              onChange={handleStringFieldChange}
            />
          </p>
        </div>
        <div className="container">
          <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneMessage}
            </div>
            <div className="container">
              <p>
                {editProject.photoURL ? (
                  <p>
                    <img
                      className="upload-display"
                      alt="Development Pic"
                      width={200}
                      src={editProject.photoURL}
                    />
                  </p>
                ) : null}
              </p>
            </div>
          </div>
        </div>
        <p>
          <input className="submit" type="submit" value="Submit" />
        </p>
      </form>
    </>
  )
}
