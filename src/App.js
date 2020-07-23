import React from 'react'
import {  Route, Router, Link } from 'react-router-dom'
// import Pizza from './containers/Pizza'
import Users from './containers/Users'
import asyncComponent from './hoc/asyncComponent'
import CustomForm from './components/CustomForm/CustomForm'

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza')
})

export default function App() {
    return (
        <div>
            <div>
                <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link> | <Link to="/custform">Custom Form</Link>
            </div>
            <div>
                <Route path="/" exact>
                    <Users />
                </Route>
                <Route path="/pizza" exact>
                    <AsyncPizza />
                </Route>
                <Route path="/custform" exact>
                    <CustomForm />
                </Route>
            </div>
        </div>
    )
}
