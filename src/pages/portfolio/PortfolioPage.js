import { useState } from 'react';
import './PortfolioPage.css';
import projectsList from './projectsData'
import { useEffect } from 'react';
import closeIcon from '../../assets/close.svg'

const IMAGE_URL_PREFIX = "https://www.tommusselman.com/images/"

const sortFilters = (filters) => {
  return filters
    .sort(([a,],[b,]) => b < a ? 1 : -1)
    .sort(([,a],[,b]) => b.count - a.count)
}

const getInitialFilters = () => {
  const allTechs = projectsList.flatMap(project => {
    return project.techStack
  })
  const initialFilters = new Object
  allTechs.forEach(tech => {
    if (!initialFilters[tech.name]) {
      initialFilters[tech.name] = {count: 1, svg: tech.svgString}
    } else {
      initialFilters[tech.name].count++
    }
  })
  return sortFilters(Object.entries(initialFilters))
}

const PortfolioPage = (props) => {
  const [projects, setProjects] = useState(projectsList)
  const [inactiveFilterList, setInactiveFilterList] = useState(getInitialFilters)
  const [activeFilterList, setActiveFilterList] = useState([])
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false)

  useEffect(()=> {
    setProjects(projectsList.filter(project => {
        const filterNames = activeFilterList.map(filter => filter[0])
        const projTechNames = project.techStack.map(tech => tech.name)
        return filterNames.every(filterName => projTechNames.includes(filterName))
      })
    )

  }, [activeFilterList])

  const addFilter = (filter) => {
    setActiveFilterList(currentActiveFilterList => {
      return [...currentActiveFilterList, filter]
    })
    setInactiveFilterList(currentInactiveFilterList => {
      return currentInactiveFilterList.filter(inactiveFilter => filter[0] !== inactiveFilter[0])
    })
  }

  const removeFilter = (filter) => {
    setActiveFilterList(currentActiveFilterList => {
      return currentActiveFilterList.filter(activeFilter => filter[0] !== activeFilter[0])
    })
    setInactiveFilterList(currentInactiveFilterList => {
      console.log(sortFilters([...currentInactiveFilterList, filter]))
      return sortFilters([...currentInactiveFilterList, filter])
    })
  }

  return (
    <>
      <h1>Portfolio</h1>
      <p>Here's a full list of software projects I've done, ordered by most recent to oldest.</p>
      <div className={`filter-box ${isFilterBoxOpen && "visible"}`}>
        <div className="filter-box-top" onClick={() => setIsFilterBoxOpen(cur => !cur)}><div className="filter-text">Filter by Tech:</div><div className="filter-count">{activeFilterList.length > 0 && `${activeFilterList.length} filter${activeFilterList.length > 1 ? "s" : ""} active`}</div><div className={`filter-toggle-btn ${isFilterBoxOpen && "open"}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="512px" height="512px"><path d="M 24.96875 13 C 24.449219 13.007813 23.953125 13.21875 23.585938 13.585938 L 3.585938 33.585938 C 3.0625 34.085938 2.851563 34.832031 3.035156 35.535156 C 3.21875 36.234375 3.765625 36.78125 4.464844 36.964844 C 5.167969 37.148438 5.914063 36.9375 6.414063 36.414063 L 25 17.828125 L 43.585938 36.414063 C 44.085938 36.9375 44.832031 37.148438 45.535156 36.964844 C 46.234375 36.78125 46.78125 36.234375 46.964844 35.535156 C 47.148438 34.832031 46.9375 34.085938 46.414063 33.585938 L 26.414063 13.585938 C 26.03125 13.203125 25.511719 12.992188 24.96875 13 Z"/></svg></div></div>
        <div className={`filter-box-dropdown ${isFilterBoxOpen && "visible"}`}>
          <ul className="filter-list-inactive tech-stack">
            {inactiveFilterList.map(([name, value], i) => {
              return (
                <li className="tech-stack-item filter-button" key={`inactive-filter-${i}`} onClick={() => addFilter([name, value])} dangerouslySetInnerHTML={{__html: value.svg + name}}></li>
              )
            })}
          </ul>
          {activeFilterList.length > 0 && "Remove Filters:"}
          <ul className="filter-list-active tech-stack">
            {
              activeFilterList.map(([name, value], i) => {
                return (
                  <li className="tech-stack-item filter-button" key={`active-filter-${i}`} onClick={() => removeFilter([name, value])}><span dangerouslySetInnerHTML={{__html: value.svg}}></span>{name}<img src={closeIcon} /></li>
                )
              })
            }
          </ul>
        </div>  
      </div>
      <div className="projects-list">
        { projects.length === 0 && <h2>No projects match your filters.</h2>}
        { projects.map((project, i) => {
          return (
            <div className="project" key={`proj-${i}`}>
            <h1 className="proj-title">{project.title}</h1>
            <div className="row1">
              <div className="details">
                <div className="links">
                  {project.links.map((link, j) => {
                    return(
                      <a href={link.url} key={`link-${j}`} target="_blank" className="link">{link.text}</a>
                    )
                  })}
                </div>
                <div className="description" dangerouslySetInnerHTML={{__html: project.description}}>
                </div>
              </div>
              <div className="screen">
                { project.sample.type === "video" && <iframe className="proj-screenshot" width="560" height="315" src={project.sample.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                { project.sample.type === "image" && <img src={IMAGE_URL_PREFIX + project.sample.src} className="proj-screenshot" />}
              </div>
            </div>
            <h3>Tech Used:</h3>
            <ul className="tech-stack">
              { project.techStack.map((tech, j) => {
                return (
                  <li className="tech-stack-item" key={`tech-${j}`} dangerouslySetInnerHTML={{__html: tech.svgString + tech.name}}></li>
                )
              })}
            </ul>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default PortfolioPage;