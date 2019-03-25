import React from "react"

export default (props) => {
  console.log('COMPONENT 1 PROPS', props)
  const { subtitle, title } = props.props
  return (
    <div style={{backgroundColor: "lightgreen"}}>
      <h1>Component 1</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  )
}