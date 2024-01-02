import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`font-pop font-regular text-[16px] text-paraColor ${className}`}>{text}</p>
  )
}

export default Paragraph