import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class Sidebar extends Component {
  state = {
    links: [
      { title: "Счет", url: "/", exact: false },
      { title: "История", url: "/history", exact: false },
      { title: "Планирование", url: "/planning", exact: false },
      { title: "Новая запись", url: "/record", exact: false },
      { title: "Категории", url: "/categories", exact: false },
    ],
  }

  changeActiveClass = url => {
    const { links } = this.state
    const updatedLinks = links.map(link => {
      if (link.url === url) {
        link.exact = true
      } else {
        link.exact = false
      }

      return link
    })

    this.setState({ links: updatedLinks })
  }

  render() {
    const { links } = this.state
    const { active } = this.props

    return (
      <ul
        className={active ? "sidenav app-sidenav open" : "sidenav app-sidenav"}
      >
        {links.map(link => {
          return (
            <li key={link.url} className={link.exact ? "active" : ""}>
              <NavLink
                to={link.url}
                className="waves-effect waves-orange pointer active"
                onClick={() => this.changeActiveClass(link.url)}
                exact
              >
                {link.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }
}
