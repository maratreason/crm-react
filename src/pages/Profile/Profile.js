import React, { Component } from "react"

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <h3>Профиль</h3>
        </div>

        <form className="form">
          <div className="input-field">
            <input id="description" type="text" />
            <label htmlFor="description">Имя</label>
            <span className="helper-text invalid">name</span>
          </div>

          <button className="btn waves-effect waves-light" type="submit">
            Обновить
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}
