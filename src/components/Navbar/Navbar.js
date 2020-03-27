import React, { Component, createRef } from "react"
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.dropdownRef = createRef()
    this.interval = null
  }

  state = {
    date: new Date().getTime(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date().getTime(),
      })
    }, 1000)
    window.M.Dropdown.init(this.dropdownRef.current, {
      constrainWidth: true,
    })
  }

  logout = () => {
    console.log("logout")
  }

  componentWillUnmount() {
    this.props = null
    clearInterval(this.interval)
  }

  render() {
    const { hideSidebar } = this.props
    const { date } = this.state
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }

    return (
      <nav className="navbar orange lighten-1">
        <div className="nav-wrapper">
          <div className="navbar-left">
            <a href="/" onClick={hideSidebar}>
              <i className="material-icons black-text">dehaze</i>
            </a>
            <span className="black-text">
              {new Intl.DateTimeFormat("ru-RU", options).format(date)}
            </span>
          </div>

          <ul className="right hide-on-small-and-down">
            <li>
              <a
                className="dropdown-trigger black-text"
                href="/"
                data-target="dropdown"
                ref={this.dropdownRef}
              >
                USER NAME
                <i className="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown" className="dropdown-content">
                <li>
                  <NavLink to="/profile" className="black-text">
                    <i className="material-icons">account_circle</i>Профиль
                  </NavLink>
                </li>
                <li className="divider" tabIndex="-1"></li>
                <li>
                  <NavLink
                    to="/login?message=logout"
                    className="black-text"
                    onClick={this.logout}
                  >
                    <i className="material-icons">assignment_return</i>Выйти
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
