import { useState } from 'react'
import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'
import filter from './images/filter.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Home() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Avanti',
      status: 'Complete',
      address: '201 4th St S',
      class: 'Apartments',
      floor: 9,
      units: 366,
      completion: '2018',
      website: 'https://avantistpete.com/',
    },
    {
      id: 2,
      name: 'ONE St. Petersburg',
      status: 'Complete',
      address: '100 1st Ave N',
      class: 'Condos',
      floor: 41,
      units: 253,
      completion: '2018',
      website: 'http://onestpetersburg.com/',
    },
    {
      id: 3,
      name: 'Tru by Hilton',
      status: 'Complete',
      address: '1650 Central Ave',
      class: 'Hotel',
      floor: 7,
      units: 132,
      completion: '2020',
      website:
        'https://www.hilton.com/en/hotels/piedtru-tru-st-petersburg-downtown-central-ave/',
    },
    {
      id: 4,
      name: 'Saint James Townhomes',
      status: 'Complete',
      address: '758 3rd Ave S',
      class: 'Townhomes',
      floor: 3,
      units: 8,
      completion: '2020',
      website: 'https://saintjamessaintpete.com/',
    },
    {
      id: 5,
      name: '2800 Central Ave',
      status: 'Proposed',
      address: '2800 Central Ave',
      class: 'Condos',
      floor: 5,
      units: 16,
      completion: '2022',
      website: 'https://www.2800central.com/',
    },
    {
      id: 6,
      name: 'Bezu',
      status: 'Cancelled',
      address: '100 4th Ave N',
      class: 'Residential',
      floor: 24,
      units: 28,
      completion: '2019',
      website: 'N/A',
    },
    {
      id: 7,
      name: 'Ascent St Petersburg',
      status: 'Under Construction',
      address: '225 1st Ave N',
      class: 'Apartments/Hotel',
      floor: 36,
      units: 526,
      completion: '2023',
      website: 'N/A',
    },
    {
      id: 8,
      name: 'Sapphire Condominiums',
      status: 'Proposed',
      address: '602 3rd Ave S',
      class: 'Condos',
      floor: 6,
      units: 11,
      completion: 'TBD',
      website: 'N/A',
    },
  ])

  return (
    <>
      <div className="layout">
        <header>
          <div className="spr-img">
            <div className="container">
              <div className="dropdown">
                <img src={list} alt="nav dropdown" width="35" height="35" />
                <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">Developments</a>
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>

          <h1>
            <a to="/">
              <img
                className="spr-logo"
                src={spr}
                alt="St.Pete Rising Logo"
                width="475"
                height="225"
              />
            </a>
          </h1>
          <h2 className="text-container">
            <img
              className="dtsp-skyline"
              src={dtspSky}
              alt="nav dropdown"
              width="495"
              height="200"
            />
            <div className="text-centered">(Link Name)</div>
          </h2>
        </header>
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="&#x1F50D; Search"
          ></input>
          <div className="dropdown">
            <img src={filter} alt="filter content" width="35" height="35" />
            <div className="dropdown-content">
              <a href="#">Last Updated</a>
              <a href="#">By Date Added</a>
              <a href="#">A-Z</a>
            </div>
          </div>
        </form>
        <main className="results">
          {projects.map((project) => (
            <dl className="projectResults">
              <h3>{project.name}</h3>
              <dt className="status">
                Status: <dd>{project.status}</dd>{' '}
              </dt>
              <article>
                <dt>
                  Address: <dd>{project.address}</dd>
                </dt>
                <dt>
                  Class: <dd>{project.class}</dd>
                </dt>
                <dt>
                  Floor: <dd>{project.floor}</dd>
                </dt>
              </article>
              <article>
                <dt>
                  Units: <dd>{project.units}</dd>
                </dt>
                <dt>
                  Completion: <dd>{project.completion}</dd>
                </dt>
                <dt>
                  Website:
                  <dd>
                    <a className="webpage" href="{project.website}">
                      Link
                    </a>
                  </dd>
                </dt>
              </article>

              {/* <a href="https://www.w3schools.com">Visit W3Schools</a>  */}
            </dl>
          ))}
        </main>

        <footer>
          <div className="social-media">
            <img
              className="social-icon"
              src={facebook}
              alt="Facebook icon"
              width="35"
              height="35"
            />
            <img
              className="social-icon"
              src={instagram}
              alt="Instagram icon"
              width="35"
              height="35"
            />
            <img
              className="social-icon"
              src={twitter}
              alt="Twitter icon"
              width="35"
              height="35"
            />
            <img
              className="social-icon"
              src={linkedin}
              alt="LinkedIn icon"
              width="35"
              height="35"
            />
          </div>
          <p></p>
          Terms of Use - Privacy Policy © 2021 St. Pete Rising, LLC
        </footer>
      </div>
    </>
  )
}
