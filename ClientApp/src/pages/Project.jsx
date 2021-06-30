import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'
import { authHeader, getUserId, isLoggedIn } from '../auth'

export function Project() {
  const [project, setProject] = useState({
    name: '',
    status: '',
    address: '',
    class: '',
    floor: 0,
    units: 0,
    completion: '',
    website: '',
    latitude: 0,
    longitude: 0,
    photoURL: '',
  })

  const [selectedMapProject, setSelectedMapProject] = useState(null)

  const [viewport, setViewport] = useState({
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 9.8,
  })

  const history = useHistory()
  const params = useParams()
  // @ts-ignore
  const id = params.id

  useEffect(() => {
    async function fetchProject() {
      const response = await fetch(`/api/Projects/${id}`)
      if (response.ok) {
        const apiData = await response.json()
        setProject(apiData)
      }
    }
    fetchProject()
  }, [id])

  async function handleDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/Projects/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.ok) {
      history.push('/')
    }
  }

  return (
    <>
      <main className="results">
        <dl className="project-results">
          <h3>{project.name}</h3>
          <dt className="status">
            <div className="subject">Status:</div>{' '}
          </dt>
          <dd className="project-status">{project.status}</dd>{' '}
          <div className="container">
            <dt>
              <div className="subject">Class:</div>
            </dt>
            <dd>{project.class}</dd>
            <dt>
              <div className="subject">Floor:</div>
            </dt>
            <dd>{project.floor}</dd>
          </div>
          <div className="container">
            <dt>
              <div className="subject">Units:</div>
            </dt>
            <dd>{project.units}</dd>
            <dt>
              <div className="subject">Completion:</div>{' '}
            </dt>
            <dd>{project.completion}</dd>
          </div>
          <div className="container">
            <dt>
              <div className="subject">Website:</div>
            </dt>
            <dd>{project.website}</dd>
          </div>
          <div className="container">
            <dt>
              <div className="subject">Location:</div>
            </dt>
            <dd>{project.address}</dd>
          </div>
          <div className="container">
            <div className="map">
              <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                style={{ position: 'absolute' }}
                width="80%"
                height="35%"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              >
                <div style={{ position: 'absolute', left: 10 }}>
                  <NavigationControl />
                </div>

                {selectedMapProject ? (
                  <Popup
                    latitude={selectedMapProject.latitude}
                    longitude={selectedMapProject.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setSelectedMapProject(null)}
                    offsetTop={-5}
                  >
                    <div>
                      <p>{selectedMapProject.name}</p>
                      <p>{selectedMapProject.description}</p>
                    </div>
                  </Popup>
                ) : null}

                <Marker
                  latitude={project.latitude}
                  longitude={project.longitude}
                >
                  <span
                    role="img"
                    aria-label="pin"
                    onClick={() => setSelectedMapProject(project)}
                  >
                    📍
                  </span>
                </Marker>
              </ReactMapGL>
            </div>
          </div>
          <div className="container">
            <div className="image-uploads">
              {project.photoURL ? (
                <img alt="Development Pic" width={300} src={project.photoURL} />
              ) : null}
            </div>
          </div>
          <div className="container">
            {
              // @ts-ignore
              isLoggedIn() && project.userId === getUserId() ? (
                <button className="edit-button">
                  <a href={`/Projects/${id}/edit`}>Edit</a>
                </button>
              ) : null
            }

            {
              // @ts-ignore
              isLoggedIn() && project.userId === getUserId() ? (
                <button className="delete-button" onClick={handleDelete}>
                  Delete
                </button>
              ) : null
            }
          </div>
        </dl>
      </main>
    </>
  )
}
