import { useEffect, useState } from 'react'
import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Home() {
  const [projects, setProjects] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(
    function () {
      async function loadProjects() {
        const url =
          filterText.length === 0
            ? '/api/projects'
            : `/api/projects?filter=${filterText}`
        const response = await fetch(url)
        if (response.status === 200) {
          const json = await response.json()
          setProjects(json)
        }
      }
      loadProjects()
    },
    [filterText]
  )

  return (
    <>
      <form>
        <input
          className="search-bar"
          type="text"
          placeholder="&#x1F50D; Search..."
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        ></input>
      </form>
      <main className="results">
        {projects.map((project) => (
          <dl key={project.id} className="projectResults">
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
              {/* <dt>
                  <div className="subject">Website:</div>
                </dt>
                <dd>
                  <a className="webpage" href="{project.website}">
                    Link
                  </a>
                </dd> */}
            </article>
            <button className="more-button">
              <a href={`/project/${project.id}`}>More</a>
            </button>
          </dl>
        ))}
      </main>
    </>
  )
}
