import React from 'react'
import './IconButton.css'
const IconButton = (props) => {
  return (
    <a target={props.target} href={props.href} onClick={props.onClick} className={`btn btn-outline-t-teal flex-fill app__mr-2 app__ml-2 mt-sm-2 ` + props.classes ?? ''}>
      <i className={`${props.icon}`}></i> {props.title}
    </a>
  )
}
export default IconButton