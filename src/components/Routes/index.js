import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home'
import Perfil from "../../pages/Perfil"

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/perfil" exact component={Perfil} />
    </Switch>
  )
}

export default Routes