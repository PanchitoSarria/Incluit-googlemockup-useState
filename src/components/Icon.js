import React from 'react'

const Icon = ({imgSrc, iconStyling}) => {
  return (
    <img src={imgSrc} width='18' height='18' className={`icon ${iconStyling}`}/>
  )
}

export default Icon