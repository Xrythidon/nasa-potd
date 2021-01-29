import {useEffect, useState} from 'react'

const useProgressiveImage = (src,bgImage) => {  
  const [sourceLoaded, setSourceLoaded] = useState(`url(${bgImage})`)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded 
}
export default useProgressiveImage
