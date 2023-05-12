import {useState} from 'react'
import './Image.css'

const Image = ({divClassName, imgSrc}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={`img-container ${divClassName}`}>
      <img src={imgSrc} className={`image ${visible && "visible"}`} onLoad={() => setVisible(true)}/>
    </div>
  )
}

export default Image