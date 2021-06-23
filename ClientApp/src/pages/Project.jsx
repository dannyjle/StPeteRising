import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  })

  const params = useParams()
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

  return (
    <>
      <main className="results">
        <dl className="project-results">
          <h3>{project.name}</h3>
          <dt className="status">
            <div className="subject">Status:</div>{' '}
          </dt>
          <dd className="project-status">{project.status}</dd>{' '}
          <article>
            <dt>
              <div className="subject">Class:</div>
            </dt>
            <dd>{project.class}</dd>
            <dt>
              <div className="subject">Floor:</div>
            </dt>
            <dd>{project.floor}</dd>
          </article>
          <article>
            <dt>
              <div className="subject">Units:</div>
            </dt>
            <dd>{project.units}</dd>
            <dt>
              <div className="subject">Completion:</div>{' '}
            </dt>
            <dd>{project.completion}</dd>
          </article>
          <article>
            <dt>
              <div className="subject">Website:</div>
            </dt>
            <dd>
              <a className="webpage" href="{project.website}">
                Link
              </a>
            </dd>
          </article>
          <article>
            <dt>
              <div className="subject">Location:</div>
            </dt>
            <dd>{project.address}</dd>
          </article>
          <article>MAP GOES HERE</article>
          <article>
            <p>--------</p>
          </article>
          <article>IMAGES GO HERE</article>
        </dl>
      </main>
    </>
  )
}
