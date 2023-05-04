import './ResumePage.css';
import resume from '../../assets/resume.pdf'

const ResumePage = () => {

  return (
    <>
      <h1>Resumé</h1>
      <p>You can find a more detailed breakdown of my professional experience and volunteer work on my <a href="https://www.linkedin.com/in/tmussel" target="_blank">LinkedIn</a>.</p>
      <object className="pdf-viewer" data={resume} type="application/pdf">
        <p>Unable to display PDF file in your browser. <a href={resume} target="_blank">Download</a> instead.</p>
      </object>
    </>
  )
}

export default ResumePage;