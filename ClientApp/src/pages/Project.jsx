import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Project() {
  const [project, setProject] = useState([])

  const params = useParams()

  async function loadProjectInfo() {
    const response = await fetch('/api/projects/${params.id}')

    if (response.status === 200) {
      const json = await response.json()
      setProject(json)
    }
  }

  useEffect(function () {
    loadProjectInfo()
  }, [])

  return (
    <>
      <main className="results">
        {project.map((data) => (
          <dl key={data.id} className="projectResults">
            <h3>{data.name}</h3>
            <dt className="status">
              <div className="subject">Status:</div>{' '}
            </dt>
            <dd className="project-status">{data.status}</dd>{' '}
            <article>
              <dt>
                <div className="subject">Class:</div>
              </dt>
              <dd>{data.class}</dd>
              <dt>
                <div className="subject">Floor:</div>
              </dt>
              <dd>{data.floor}</dd>
            </article>
            <article>
              <dt>
                <div className="subject">Units:</div>
              </dt>
              <dd>{data.units}</dd>
              <dt>
                <div className="subject">Completion:</div>{' '}
              </dt>
              <dd>{data.completion}</dd>
              <dt>
                <div className="subject">Website:</div>
              </dt>
              <dd>
                <a className="webpage" href="{data.website}">
                  Link
                </a>
              </dd>
            </article>
          </dl>
        ))}
      </main>
    </>
  )
}
