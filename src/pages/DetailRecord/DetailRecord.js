import React, { Component } from "react"

export default class DetailRecord extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="breadcrumb-wrap">
            <a href="/history" className="breadcrumb">
              История
            </a>
            <a className="breadcrumb" href="/">
              Расход
            </a>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card red">
                <div className="card-content white-text">
                  <p>Описание:</p>
                  <p>Сумма:</p>
                  <p>Категория:</p>

                  <small>12.12.12</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
