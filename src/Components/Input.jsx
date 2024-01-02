import React from 'react'

const Input = ({className, inType, inPh, inName, inValue}) => {
  return (
    <input className={`${className}`} type={inType} placeholder={inPh} name={inName} value={inValue}/>
  )
}

export default Input