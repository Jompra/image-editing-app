import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleImage } from '../../lib/api'
import Filters from './Filters'


function ImageEdit() {
  const { id: imageId } = useParams()
  const [image, setImage] = React.useState('')
  const [b64, setB64] = React.useState(null)
  const [original, setOriginal] = React.useState(false)

  React.useEffect(() => {
    const getImage = async () => {
      try {
        const res = await getSingleImage(imageId)
        setImage(res.data.url)
      } catch (err) {
        console.log(err.response)
      }
    }
    getImage()
  }, [imageId])

  const imageChange = (image) => {
    setB64(image)
  }

  const showOriginal = () => {
    console.log('mouse has entered')
    setOriginal(true)
  }
  const hideOriginal = () => {
    console.log('mouse has left')
    setOriginal(false)
  }



  return (
    <div className="ImageEdit">
      <div className="box columns is-multiline">
        <div className="column is-full top editable-img">
          {b64 && original === false && <img src={b64} alt="uploadedimg" onMouseEnter={showOriginal} />}
          {!b64 && <img src={image} alt="uploadedimg" />}
          {original && <img src={image} alt="uploadedimg" onMouseLeave={hideOriginal}/>}
        </div>
        <Filters url={image} handleImageChange={imageChange} />
        <button className="button button-process column is-one-quarter">Process Image</button>
      </div>
    </div>
  )
}
export default ImageEdit