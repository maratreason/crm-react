import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class ActionButton extends Component {
  render() {
    return (
      <div className="fixed-action-btn">
        <NavLink className="btn-floating btn-large blue" to="/record">
          <i className="large material-icons">add</i>
        </NavLink>
      </div>
    )
  }
}
