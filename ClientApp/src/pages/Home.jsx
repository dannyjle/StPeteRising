import { useEffect, useState } from 'react'

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
        if (response.ok) {
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
      <h4>Projects List</h4>
      <main className="results">
        {projects.map((project) => (
          <dl key={project.id} className="project-results">
            <h3>{project.name}</h3>
            <dt className="status">
              <div className="subject">Status:</div>
            </dt>
            <dd className="project-status">{project.status}</dd>
            <section>
              <dt>
                <div className="subject">Class:</div>
              </dt>
              <dd>{project.class}</dd>
              <dt>
                <div className="subject">Floor:</div>
              </dt>
              <dd>{project.floor}</dd>
            </section>
            <section>
              <dt>
                <div className="subject">Units:</div>
              </dt>
              <dd>{project.units}</dd>
              <dt>
                <div className="subject">Completion:</div>
              </dt>
              <dd>{project.completion}</dd>
            </section>
            <section>
              <button className="more-button">
                <a href={`/project/${project.id}`}>More</a>
              </button>
            </section>
          </dl>
        ))}
      </main>
    </>
  )
}
