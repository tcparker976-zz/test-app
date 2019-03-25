import React from "react"

export default (props) => {
  console.log('COMPONENT 2 PROPS', props)
  const { subtitle, title, list } = props.props
  console.log('TITLE', title)
  return (
    <div style={{backgroundColor: "orange"}}>
      <h1>Component 2</h1>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}