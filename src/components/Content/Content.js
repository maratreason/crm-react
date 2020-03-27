import React, { Component } from "react"

export default class Content extends Component {
  render() {
    const { active } = this.props
    return (
      <main className={active ? "app-content" : "app-content full"}>
        <div className="app-page">{this.props.children}</div>
      </main>
    )
  }
}
