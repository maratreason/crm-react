import React, { Component } from "react"

import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import Content from "../components/Content/Content"
import ActionButton from "../components/UI/ActionButton/ActionButton"

export default class MainLayout extends Component {
  state = {
    active: true,
  }

  hideSidebar = event => {
    event.preventDefault()
    const { active } = this.state
    this.setState({ active: !active })
  }

  componentWillUnmount() {
    this.hideSidebar = null
  }

  render() {
    const { active } = this.state
    return (
      <div>
        <div className="app-main-layout">
          <Navbar hideSidebar={this.hideSidebar} />
          <Sidebar active={active} />
          <Content children={this.props.children} active={active} />
          <ActionButton />
        </div>
      </div>
    )
  }
}
