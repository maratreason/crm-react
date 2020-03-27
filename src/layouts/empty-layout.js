import React from "react"
import { withRouter } from "react-router-dom"

const EmptyLayout = props => {
  return <div className="grey darken-1 empty-layout">{props.children}</div>
}

export default withRouter(EmptyLayout)
