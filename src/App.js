import React, { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import "./../node_modules/materialize-css/dist/css/materialize.min.css"
import "./../node_modules/materialize-css/dist/js/materialize.min.js"

import "./assets/index.css"
import EmptyLayout from "./layouts/empty-layout"
import MainLayout from "./layouts/main-layout"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Categories from "./pages/Categories/Categories"
import DetailRecord from "./pages/DetailRecord/DetailRecord"
import History from "./pages/History/History"
import Home from "./pages/Home/Home"
import Planning from "./pages/Planning/Planning"
import Profile from "./pages/Profile/Profile"
import Record from "./pages/Record/Record"

function App() {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path="/login"
          component={props => (
            <EmptyLayout>
              <Login history={props.history} />
            </EmptyLayout>
          )}
        />

        <Route
          exact
          path="/registration"
          component={() => (
            <EmptyLayout>
              <Register />
            </EmptyLayout>
          )}
        />

        <Route
          exact
          path="/categories"
          component={() => (
            <MainLayout>
              <Categories />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/detail/:id"
          component={() => (
            <MainLayout>
              <DetailRecord />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/history"
          component={() => (
            <MainLayout>
              <History />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/"
          component={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/planning"
          component={() => (
            <MainLayout>
              <Planning />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/profile"
          component={() => (
            <MainLayout>
              <Profile />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/record"
          component={() => (
            <MainLayout>
              <Record />
            </MainLayout>
          )}
        />
      </Switch>
    </Fragment>
  )
}

export default App
