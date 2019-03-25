import React from "react"
import Helmet from "react-helmet"

export default (props) => {
  console.log('COMPONENT 3 PROPS', props)
  const { name, icon, content } = props.props
  // const { subtitle, title, list } = props.props
  // console.log('TITLE', title)
  // return (
  //   <div style={{backgroundColor: "orange"}}>
  //     <h1>Component 2</h1>
  //     <h3>{title}</h3>
  //     <h4>{subtitle}</h4>
  //     <ul>
  //       {list.map(item => <li>{item}</li>)}
  //     </ul>
  //   </div>
  // )
  return (
    <div style={{backgroundColor: 'aliceblue'}}>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />  
      </Helmet>
      <h1>Component 3</h1>
      <h2 style={{float: 'left', marginRight: '20px'}}>{name}</h2>
      {icon === 'hello' && <icon className="far fa-hand-paper"></icon>}
      <p>{content}</p>
    </div>
  )
}