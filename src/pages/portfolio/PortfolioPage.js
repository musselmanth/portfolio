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
      <div className="filter-box">
        Filter by Tech:
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
            <h4>Tech Stack</h4>
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