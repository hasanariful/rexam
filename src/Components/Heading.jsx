import React from 'react'

const Heading = (props) => {
let heading = props.text.replace("#", "<span class='colorSpan'>").replace("#", "</span>")

  return (<props.as className={props.className} dangerouslySetInnerHTML={{ __html: heading }}></props.as>)
}

export default Heading