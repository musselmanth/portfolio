import './PortfolioPage.css';
import projectsList from './projectsData'

const IMAGE_URL_PREFIX = "/static/media/"

const PortfolioPage = (props) => {
  console.log(projectsList)
  return (
    <>
      <h1>Portfolio</h1>
      <p>Here's a full list of software projects I've done, ordered by most recent to oldest.</p><br />
      <div className="projects-list">
        { projectsList.map(project => {
          return (
            <div className="project">
            <h1 className="proj-title">{project.title}</h1>
            <div className="row1">
              <div className="details">
                <div className="links">
                  {project.links.map(link => {
                    return(
                      <a href={link.url} target="_blank" className="link">{link.text}</a>
                    )
                  })}
                </div>
                <div className="description" dangerouslySetInnerHTML={{__html: project.description}}>
                </div>
              </div>
              <div className="screen">
                { project.sample.type === "video" && <iframe className="proj-screenshot" width="560" height="315" src={project.sample.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                { project.sample.type === "image" && <img src={IMAGE_URL_PREFIX + project.sample.src} className="proj-screenshot" />}
              </div>
            </div>
            <h4>Tech Stack</h4>
            <ul className="tech-stack">
              { project.techStack.map(tech => {
                return (
                  <li className="tech-stack-item" dangerouslySetInnerHTML={{__html: tech.svgString + tech.name}}></li>
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